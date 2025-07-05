import TopHeader from "./components/TopHeader";
import Toolbar from "./components/Toolbar";
import SpreadsheetTable from "./components/SpreadsheetTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Toolbar/>
      <main className="flex-grow">
        <SpreadsheetTable />
      </main>
      <Footer />
    </div>
  );
}