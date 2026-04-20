
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      const existingLeads = JSON.parse(localStorage.getItem('printpack_leads') || '[]');
      const newLead = {
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      existingLeads.push(newLead);
      localStorage.setItem('printpack_leads', JSON.stringify(existingLeads));
      
      setIsSubmitting(false);
      reset();
      toast.success('Thank you for your interest. We will contact you shortly.');
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Print Pack, I\'m interested in corrugated packaging solutions');
    window.open(`https://wa.me/919667537637?text=${message}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-2 text-gray-900 placeholder:text-gray-500"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-2 text-gray-900 placeholder:text-gray-500"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="requirement">Requirement / Message *</Label>
          <Textarea
            id="requirement"
            placeholder="Tell us about your packaging requirements"
            rows={4}
            className="mt-2 text-gray-900 placeholder:text-gray-500"
            {...register('requirement', { required: 'Please describe your requirement' })}
          />
          {errors.requirement && (
            <p className="text-sm text-destructive mt-1">{errors.requirement.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 transition-all duration-200 active:scale-[0.98]"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Request a Quote'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="flex-1 transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </form>

      <div className="bg-muted text-muted-foreground rounded-2xl p-8 space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-foreground">Contact Information</h3>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <span className="font-medium text-foreground">Address:</span><br />
              Shed 66, Wazirpur Industrial Area<br />
              Delhi, India
            </p>
            <p>
              <span className="font-medium text-foreground">Phone:</span><br />
              +91 96675 37637
            </p>
            <p>
              <span className="font-medium text-foreground">Email:</span><br />
              contact@printpack.in
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeadForm;
