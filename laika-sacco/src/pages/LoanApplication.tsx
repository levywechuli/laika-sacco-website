import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const loanTypes = {
  development: {
    name: 'Development Loan',
    formUrl: '/public/uploads/development-loan-form.pdf',
    description: 'Finance your development projects with our flexible terms'
  },
  emergency: {
    name: 'Emergency Loan',
    formUrl: '/public/uploads/EMERGENCY LOAN APPLICATION FORM.pdf',
    description: 'Get urgent financial assistance within 24 hours'
  },
  'school-fee': {
    name: 'School Fee Loan',
    formUrl: '/public/uploads/SCHOOL FEES LOAN FORM.pdf',
    description: 'Ensure your children\'s education is never interrupted'
  },
  instant: {
    name: 'Instant Loan',
    formUrl: '/public/uploads/INSTANT  LOAN APPLICATION FORM.pdf',
    description: 'Quick cash via M-PESA processed as you wait'
  },
  'okoa-siku': {
    name: 'Okoa Siku Loan',
    formUrl: '/public/uploads/OKOA SIKU LOAN FORM.pdf',
    description: 'Short-term financial rescue for urgent needs'
  },
  holiday: {
    name: 'Holiday Loan',
    formUrl: '/public/uploads/HOLIDAY LOAN FORM (1).pdf',
    description: 'Enjoy your holidays without financial stress'
  },
  karibu: {
    name: 'Karibu Loan',
    formUrl: '/public/uploads/KARIBU LOAN APPLICATION FORM 1.pdf',
    description: 'Welcome loan for new check-off members'
  }
};

const LoanApplication = () => {
  const { loanType } = useParams<{ loanType: string }>();
  const loan = loanType && loanTypes[loanType as keyof typeof loanTypes] 
    ? loanTypes[loanType as keyof typeof loanTypes]
    : loanTypes.development;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            {loan.name} Application
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {loan.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <Card className="shadow-premium border-2 border-primary/10">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-primary mb-2">{loan.name} Application Form</CardTitle>
              <p className="text-muted-foreground">
                Download the form, fill it out, and submit it at our office
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Instructions */}
              <div className="bg-secondary rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-4">How to Apply:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Step 1: Download the Form</p>
                      <p className="text-sm text-muted-foreground">Click the download button below to get the PDF application form</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Step 2: Complete the Form</p>
                      <p className="text-sm text-muted-foreground">Fill out all required fields accurately and legibly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Step 3: Gather Required Documents</p>
                      <p className="text-sm text-muted-foreground">Prepare copies of your ID, payslips, and any other supporting documents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Step 4: Submit at Our Office</p>
                      <p className="text-sm text-muted-foreground">Bring the completed form and documents to any of our branch offices</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center space-y-4">
                <Button 
                  size="xl" 
                  variant="premium" 
                  className="group"
                  asChild
                >
                  <a 
                    href={loan.formUrl} 
                    download={`${loan.name.replace(/\s+/g, '-')}-Application-Form.pdf`}
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Application Form
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  PDF format • Please print and fill by hand or use a PDF editor
                </p>
              </div>

              {/* Required Documents */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Required Documents:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Copy of National ID/Passport</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Recent payslips (3 months)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Guarantor information</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-primary text-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                <p className="mb-4">Our team is ready to assist you with your loan application</p>
                <Link to="/contact">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LoanApplication;

