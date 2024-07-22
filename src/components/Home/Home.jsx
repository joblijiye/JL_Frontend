import NavBar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import JobTags from "../JobTags/JobTags";
import FloatingIcons from "../FloatingIcons/FloatingIcons";


export default function Home(){
    return(
        <div className="min-h-screen bg-white relative">
        <NavBar />
        <div className="relative">
        <FloatingIcons />
          <main className="container mx-auto px-1 py-20 relative z-10">
        
            <h1 className="text-4xl  font-bold text-center">Find Your Dream Job Now</h1>
            <p className="text-center text-gray-500 mt-2 mb-5">10 lakh+ trusted jobs for you to work out with, go apply now !!</p>
            <SearchBar />
            <div className="mt-48"></div> {/* Add spacing here */}
            <JobTags />
           
          </main>
        </div>
        
      </div>
    )
}