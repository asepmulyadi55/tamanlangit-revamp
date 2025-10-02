// Directus API service
export interface NavigationItem {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  url: string;
  url_status: boolean;
}

export interface DirectusResponse<T> {
  data: T[];
}

class DirectusService {
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
    this.token = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN || '';
    
    // Debug logging to help troubleshoot
    if (typeof window !== 'undefined') {
      console.log('Directus Service initialized:', {
        baseUrl: this.baseUrl,
        hasToken: !!this.token,
        tokenLength: this.token.length
      });
    }
  }

  private async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    // Debug logging
    if (typeof window !== 'undefined') {
      console.log('Making request to:', url);
      console.log('With token:', this.token ? `${this.token.substring(0, 10)}...` : 'NO TOKEN');
    }
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure fresh data for dynamic content
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Directus API error:', {
        status: response.status,
        statusText: response.statusText,
        url,
        errorText
      });
      throw new Error(`Directus API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  }

  async getNavigationItems(): Promise<NavigationItem[]> {
    try {
      const response = await this.request<DirectusResponse<NavigationItem>>('/items/navigation');
      
      // Filter only published items and sort by id
      return response.data
        .filter(item => item.status === 'published')
        .sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error('Error fetching navigation items:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const directusService = new DirectusService();