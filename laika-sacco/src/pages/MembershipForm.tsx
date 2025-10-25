import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowLeft, FileText, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MembershipForm = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/uploads/Membership application form.pdf';
    link.download = 'Membership application form.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const requiredDocuments = [
    'Copy of National ID/Passport',
    'KRA PIN Certificate',
    'Recent payslips (3 months)',
    'Initial deposit (Minimum KES 1,000)'
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
     <div className="bg-gradient-to-br from-[#001F3F] via-[#002B5B] to-[#003F7F] text-white py-16 flex items-center justify-center text-center">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Membership Application
    </h1>
    <p className="text-xl text-white/90">
      Join Laika SACCO and start your journey to financial growth
    </p>
  </div>
</div>


      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate('/membership')}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Membership
        </Button>

        {/* Main Application Card */}
        <Card className="shadow-premium">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Membership Application Form
            </h2>
            <p className="text-muted-foreground mb-8">
              Download the form, fill it out, and submit it at our office
            </p>

            {/* How to Apply Steps */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-6">How to Apply:</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download the Form</h4>
                    <p className="text-sm text-muted-foreground">
                      Click the download button below to get the PDF application form
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete the Form</h4>
                    <p className="text-sm text-muted-foreground">
                      Fill out all required fields accurately and legibly
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Gather Required Documents</h4>
                    <p className="text-sm text-muted-foreground">
                      Prepare copies of your ID, payslips, and any other supporting documents
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Submit at Our Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Bring the completed form and documents to any of our branch offices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="bg-secondary p-6 rounded-lg mb-8">
              <Button 
                onClick={handleDownload}
                className="w-full gap-2 text-lg py-6"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Download Application Form
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                PDF format • Please print and fill by hand or use a PDF editor
              </p>
            </div>

            {/* Required Documents */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Required Documents:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-secondary p-3 rounded-lg">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6 shadow-premium">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to assist you with your membership application
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MembershipForm;
