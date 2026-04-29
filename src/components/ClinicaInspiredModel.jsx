import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  CalendarDays,
  Video,
  MapPin,
  Star,
  Search,
  Users,
  Building2,
  Brain,
  Stethoscope,
  Pill,
  Smile,
  CheckCircle2,
  Shield,
  Clock3,
  MessageCircle,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [];
const specialists = [];
const testimonials = [];
const subscriptionPlans = [];

export default function ClinicaInspiredModel() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('Todas');
  const [modality, setModality] = useState('Todas');

  const filteredSpecialists = useMemo(() => {
    return specialists.filter((item) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.focus.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q);

      const matchesSpecialty = specialty === 'Todas' || item.area === specialty;
      const matchesModality = modality === 'Todas' || item.mode.includes(modality);

      return matchesQuery && matchesSpecialty && matchesModality;
    });
  }, [query, specialty, modality]);

  return <div />;
}
