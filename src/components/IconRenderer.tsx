import React from 'react';
import {
  Home,
  Key,
  HardHat,
  Layers,
  Compass,
  Paintbrush,
  Briefcase,
  Award,
  ShieldCheck,
  FileText,
  Eye,
  CheckCircle,
  Clock,
  ArrowRight,
  Star,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  User,
  Activity,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Key,
  HardHat,
  Layers,
  Compass,
  Paintbrush,
  Briefcase,
  Award,
  ShieldCheck,
  FileText,
  Eye,
  CheckCircle,
  Clock,
  ArrowRight,
  Star,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  User,
  Activity,
  ThumbsUp,
  MessageSquare
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconRenderer({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback to a safe construction-related icon
    return <HardHat className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
