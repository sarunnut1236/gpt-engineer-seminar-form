import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc, SortDesc, Download, Eye } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const mockApplicants = [
  { id: 1, name: "John Doe", email: "john@example.com", school: "Sunrise High School", status: "Pending Interview", province: "Bangkok", level: "High School", grade: "12", gender: "Male", birthday: "2005-05-15", tel: "0812345678", guardianTel: "0898765432", religion: "Buddhism", lineId: "johndoe123", facebook: "john.doe", instagram: "@johndoe", medicalCondition: "None", personalMedication: "None", foodAllergy: "Peanuts", shirtSize: "M" },
  // ... (add more mock applicants with all fields)
];

const Registrar = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = mockApplicants.filter(applicant => 
      Object.values(applicant).some(value => 
        value.toString().toLowerCase().includes(term)
      )
    );
    setApplicants(filtered);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    const direction = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(direction);
    const sorted = [...applicants].sort((a, b) => {
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setApplicants(sorted);
  };

  const handleFilter = (status) => {
    if (status === 'all') {
      setApplicants(mockApplicants);
    } else {
      const filtered = mockApplicants.filter(applicant => applicant.status === status);
      setApplicants(filtered);
    }
    setCurrentPage(1);
  };

  const exportToGoogleSheets = () => {
    console.log('Exporting to Google Sheets...');
    // Implement the actual export functionality here
  };

  const handleViewInfo = (applicant) => {
    setSelectedApplicant(applicant);
    setIsInfoDialogOpen(true);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applicants.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderSortIcon = (field) => {
    if (sortField === field) {
      return sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-4 md:p-8">
      <Card className="bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader className="flex flex-col md:flex-row items-center justify-between">
          <CardTitle className="text-2xl font-semibold mb-4 md:mb-0">Applicant Registry</CardTitle>
          <Button onClick={exportToGoogleSheets} className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
            <Download className="mr-2 h-4 w-4" /> Export to Google Sheets
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full md:w-64"
              />
            </div>
            <Select onValueChange={handleFilter} className="w-full md:w-auto">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending Interview">Pending Interview</SelectItem>
                <SelectItem value="Accepted">Accepted</SelectItem>
                <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
                <SelectItem value="Round #1 Pass">Round #1 Pass</SelectItem>
                <SelectItem value="Completed Application Form">Completed Application Form</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {['name', 'email', 'school', 'province', 'level', 'grade', 'status'].map((field) => (
                    <TableHead key={field} className="cursor-pointer" onClick={() => handleSort(field)}>
                      {field.charAt(0).toUpperCase() + field.slice(1)} {renderSortIcon(field)}
                    </TableHead>
                  ))}
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.school}</TableCell>
                    <TableCell>{applicant.province}</TableCell>
                    <TableCell>{applicant.level}</TableCell>
                    <TableCell>{applicant.grade}</TableCell>
                    <TableCell>{applicant.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => handleViewInfo(applicant)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, applicants.length)} of {applicants.length} entries</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                </PaginationItem>
                {[...Array(Math.ceil(applicants.length / itemsPerPage))].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1}>
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(applicants.length / itemsPerPage)} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Applicant Details: {selectedApplicant?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
            {selectedApplicant && Object.entries(selectedApplicant).map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsInfoDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registrar;