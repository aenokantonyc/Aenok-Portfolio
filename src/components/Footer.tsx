import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-heading font-bold text-lg text-foreground">
              AAC.
            </span>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Built with <Heart className="w-4 h-4" /> by Aenok Antony C
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
