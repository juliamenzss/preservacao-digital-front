export interface DocumentPayload {
    name: string;
    file: File;
    author?: string;
    description?: string;
    keywords?: string;
    category?: string;
    metadados: JSON;
  }