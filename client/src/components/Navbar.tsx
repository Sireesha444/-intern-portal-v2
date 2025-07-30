
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold text-blue-600">INTERNSHIP portal</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <Button variant="contained" color="primary">Login</Button>
    </nav>
  );
};

export default Navbar;
