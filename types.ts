import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export type InstallPlatform = 'npm' | 'windows' | 'mac' | 'linux';

export interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export interface Assistant {
  name: string;
  icon: string; // Using string for potential image urls or icon component names
  fileType: string;
}