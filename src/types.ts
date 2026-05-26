export interface Landmark {
  id: string;
  title: string;
  category: "Heritage" | "Innovation" | "Creative Arts";
  description: string;
  location: string;
  yearEstablished: string;
  highlight: string;
  imageUrl: string;
}

export interface CulturalEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  status: "active" | "planned" | "archived";
}

export interface WeatherStatus {
  temperature: number;
  humidity: number;
  condition: string;
  description: string;
  windSpeed: string;
}

export interface LocalStatusResponse {
  time: string;
  timezone: string;
  weather: WeatherStatus;
  alerts: CulturalEvent[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}

export interface Barangay {
  name: string;
  heritage: string;
  desc: string;
  tip: string;
  category: "Coastal" | "Commercial" | "Urban" | "Inland" | "Historic";
}

