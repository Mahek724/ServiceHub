import { useState } from "react";
import { Card, Typography, CardFooter, Button } from "@material-tailwind/react";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import jsPDF AutoTable plugin
import blacklogo from "../../../../images/blacklogo.png";
const Table = ({ heads, rows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  if (!Array.isArray(rows)) {
    return <div>No data available</div>;
  }
  const generatePDF = () => {
    const doc = new jsPDF();

    // Load your logo image
    const logo = new Image();
    logo.src =
      // Add logo and table name
      doc.addImage(logo, "PNG", 15, 10, 30, 30); // Adjust position and size of the logo
    doc.setFontSize(18);
    doc.text("Table Data", 60, 30); // Adjust position of the table name

    // Define table headers
    const headers = heads.filter((head) => !["_id", "password"].includes(head));

    // Define table data
    const data = currentItems.map((row) =>
      headers.map((header) => row[header])
    );

    // Add table using AutoTable plugin
    doc.autoTable({
      head: [headers], // Table headers
      body: data, // Table data
      startY: 40, // Y position to start table
    });

    doc.save("table_data.pdf");
  };

  return (
    <>
      <Button onClick={generatePDF}>Generate PDF</Button>

      <Card className="h-full w-full overflow-scroll overflow-x-scroll rounded-none">
        <table className="w-full table-auto text-left ">
          <thead>
            <tr>
              {Array.isArray(heads) &&
                heads.map(
                  (head, index) =>
                    !["_id", "password"].includes(head) && (
                      <th
                        key={index}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    )
                )}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {heads.map(
                    (head, colIndex) =>
                      !["_id", "password"].includes(head) && (
                        <td
                          key={colIndex}
                          className={`p-4 ${
                            rowIndex === currentItems.length - 1
                              ? ""
                              : "border-b border-blue-gray-50"
                          } `}
                        >
                          <Typography
                            variant="small"
                            className={
                              head.toLowerCase() === "gender" && row[head] === 1
                                ? " w-[80px] p-1 rounded-xl text-center" // Male
                                : head.toLowerCase() === "gender" &&
                                  row[head] === 2
                                ? " w-[80px] p-1 rounded-xl text-center" // Female
                                : head.toLowerCase() === "gender" &&
                                  row[head] === 0
                                ? " w-[80px] p-1 rounded-xl text-center" // Others
                                : ""
                            }
                          >
                            {head.toLowerCase() === "gender"
                              ? row[head] === 1
                                ? "Male"
                                : row[head] === 2
                                ? "Female"
                                : "Others"
                              : row[head]}
                          </Typography>
                        </td>
                      )
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
            <strong className="text-gray-900">{totalPages}</strong>
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                handlePageChange(currentPage - 1);
              }}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Table;
