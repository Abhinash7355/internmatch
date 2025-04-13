
import React from "react";
import { domains } from "../data/internships";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface DomainFilterProps {
  selectedDomain: string;
  setSelectedDomain: (domain: string) => void;
}

const DomainFilter: React.FC<DomainFilterProps> = ({ 
  selectedDomain, 
  setSelectedDomain 
}) => {
  return (
    <div className="w-full md:w-64">
      <Select 
        value={selectedDomain} 
        onValueChange={setSelectedDomain}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by domain" />
        </SelectTrigger>
        <SelectContent>
          {domains.map((domain) => (
            <SelectItem key={domain} value={domain}>
              {domain}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DomainFilter;
