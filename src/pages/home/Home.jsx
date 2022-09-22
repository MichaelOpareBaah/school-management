import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Widget from '../../components/widget/Widget';
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Link to="/students" style={{ textDecoration: 'none' }}>
            <Widget type="students" />
          </Link>
          <Widget type="teachers" />
          <Widget type="workers" />
          <Widget type="classroom" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Search</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
