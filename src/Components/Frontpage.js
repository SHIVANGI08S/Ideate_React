import React ,{useState}from 'react';
import { Layout, Menu, theme,Card , Row,Col} from 'antd';
import {Link } from 'react-router-dom'; 
import '../asset/front.css';
import cardback from '../asset/image/backa.jpg';
import logo from '../asset/image/logo.jpg';
import Background from '../asset/image/Background.jpg';
import top from '../asset/image/topback.jpg';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentIndex, setCurrentIndex] = useState(0);

  const investorData = [
    {
      name: 'Vineeta Singh',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR_9o8iLiClx0i5GvJtijxwsGb_g9jK_dTGEJFwNooCmPJDf7P',
      founder: 'Founder: Sugar Cosmetics',
    },
    {
      name: 'Gazal Alagh',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmz5-wePMOJ_d-nbG89m1aE_U5B_2TagQxFd-9CWLHcz4Kr5Vy',
      founder: 'Founder: MamaEarth',
    },
    {
      name: 'Amit Jain',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTljHwr0UqnbNv5Rc8lR0j1UE_e3X3cjml_ISkcAQ5yXh-b078C',
      founder: 'Co-Founder: CardDekho',
    },
    {
      name: 'Ashneer Grover',
      image:
        'https://c.ndtvimg.com/2023-01/beqpgsh8_ashneer-grover_625x300_05_January_23.jpg?im=Resize=(1230,900)',
      founder: 'Co-Founder: Bharat Pay',
    },
    {
      name: 'Namita Thapar',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAObQT7LVFkAxg-4O4daq-SkLaDNLyZ8_4WI7SYNLNbYQqY_io',
      founder: 'Co-Founder: Emcure',
    },
    {
      name: 'Aman Gupta',
      image:
        'https://www.tiecon-delhi.org/wp-content/uploads/2023/03/aman-gupta.jpg',
      founder: 'Founder: Boat',
    },
   
  ];

  const showPrevious = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
  };

  const showNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
      <Layout className="layout">
        <Header className="custom-header sticky-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
            <div className="logo_heading" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>IDEATE</div>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ background: '#5995cb', flex: 1, marginLeft:"710px"}}
            
          >
            <Menu.Item key="home" className='menu-item'>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" className='menu-item'>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="view-ideas" className='menu-item'>
              <Link to="/View-ideas">View Ideas</Link> {/* Link to the ViewIdeas component */}
            </Menu.Item>
            <Menu.Item key="contact" className='menu-item'>
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
        <div  style={{backgroundImage: `url(${top})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "40px" }}>
          <h1 className='first-text' style={{ color: "white", height: "130px", fontSize: "50px", marginLeft:"130px", marginTop:"140px" }}>Explore some creative and innovative ideas</h1>
          <p  className='sec-text' style ={{color: "white",fontSize:"30px", marginTop:"50px", marginLeft:"230px", width:"70%", paddingBottom:"80px"}}>Unleash Your Imagination: Share Your Ideas with the World!</p>
          </div>
        
        
       
          <div style={{ background: "#1890ff", backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "50px", textAlign: "center" }}>
            <h1 style={{marginTop:"150px", fontSize:"30px", color:"white"}}>Explore top ideas</h1>
          <Row gutter={12} justify="center">
            <Col span={8} style={{maxWidth:"100%"}}>
          <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})`}}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Eco-Friendly Packaging Solutions</span>} description={   <div>
        <p style={{ color: "#fff" }}>Address the growing environmental concerns by creating sustainable and innovative packaging materials and designs.</p>
        <p style={{ color: "#fff" }}> Reduce waste and promote eco-friendly packaging solutions for businesses seeking to minimize their environmental footprint.</p>
        
      </div>} />
            </Card>
            </Col>
            <Col span={8} style={{maxWidth:"100%"}}>
            <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})` }}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Telemedicine for Mental Health</span>} description={   <div>
        <p style={{ color: "#fff" }}> Build a telemedicine platform specifically focused on mental health support.</p>
        <p style={{ color: "#fff" }}>Connect users with licensed therapists and psychiatrists for confidential video consultations, making mental healthcare accessible and destigmatized.</p>
        
      </div>} />
            </Card>
            </Col>
            <Col span={8} style={{maxWidth:"100%"}}>
            <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})`}}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Smart Home Energy Management</span>} description={   <div>
        <p style={{ color: "#fff" }}>Develop a smart home system that optimizes energy usage and reduces utility bills. </p>
        <p style={{ color: "#fff" }}>Utilize IoT devices and AI algorithms to control lighting and heating while also providing users with insights and recommendations for energy conservation.</p>
        
      </div>} />
            </Card>
            </Col>
            </Row>
            <Row gutter={16} justify="center">
           
            <Col span={8} style={{maxWidth:"100%"}}>
            <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})`}}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>AI-Powered Personalized Learning </span>} description={   <div>
        <p style={{ color: "#fff" }}>Develop an online learning platform that leverages artificial intelligence to tailor educational content to each student's learning style and pace.</p>
        <p style={{ color: "#fff" }}>Provide real-time feedback and adaptive recommendations, making education more engaging and effective.</p>
     
      </div>} />
            </Card>
            </Col>
            <Col span={8} style={{maxWidth:"100%"}}>
            <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})`}}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Eco-Friendly Cleaning Services</span>} description={   <div>
        <p style={{ color: "#fff" }}>Launch a cleaning service that specializes in using eco-friendly and sustainable cleaning products. It reduces carbon footprint. </p>
        <p style={{ color: "#fff" }}>Cater to environmentally conscious customers who seek a green and chemical-free approach to cleaning.</p>
       
      </div>} />
            </Card>
            </Col>
            <Col span={8} style={{maxWidth:"100%"}}>
            <Card hoverable className="custo-card" style={{backgroundImage: `url(${cardback})`}}>
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Bicycle Rental and Tours</span>} description={   <div>
        <p style={{ color: "#fff" }}>Start a bicycle rental business that also offers guided tours of scenic routes and historical landmarks in your area in an eco-friendly and active way.</p>
        <p style={{ color: "#fff" }}> We Provide both locals and tourists with an opportunity to explore the area</p>
        
      </div>} />
            </Card>
            </Col>

          </Row>
          <h1 style ={{color:"white", marginTop:"210px"}}> Roles For You!</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
            <Card hoverable className="custome-card">
            <Meta className='card-title' title={<span style={{ color: "#1890ff", fontSize:"18px" }}>Be a Investor</span>} description={   <div>
        <p style={{ color: "#fff" }}>Support cutting-edge projects and startups that have the potential to shape the future.</p>
        <p style={{ color: "#fff" }}>Contribute your insights and expertise to guide the direction of exciting ventures.</p>
        <p style={{ color: "#fff" }}>Profit from Successful Ventures</p>
        <p style={{ color: "#fff" }}>Earn returns as the projects you invest in grow and achieve success.</p>
      </div>} />
            </Card>
            <Card hoverable className="custome-card">
            <Meta title={<span style={{ color: "#1890ff", fontSize:"18px" }}  className="card-title">Ask For Investment</span>} description={<div>
        <p style={{ color: "#fff" }}>Present your groundbreaking projects and ideas to potential investors. </p>
        <p style={{ color: "#fff" }}>Receive Funding and Support</p>
        <p style={{ color: "#fff" }}>Secure financial backing and expertise from investors who share your vision.</p>
        <p style={{ color: "#fff" }}>Use the investment to grow your projects and bring your innovative concepts to life.</p>
        {/* <p style={{ color: "#fff" }}>Connect with Industry Experts</p> */}
      </div>} />
            </Card>
          </div>
          <div style={{ color: 'white', marginTop: '200px' }}>
        <h1 style={{ fontSize: '40px' }}>Unicorn Investors</h1>
        <div style={{ color: 'white', marginTop: '30px', position: 'relative' }}>
        <div className="scrolling-images">
          {investorData.slice(currentIndex, currentIndex + 4).map((investor, index) => (
            <div key={index}>
              <img src={investor.image} alt={`Investor ${index + 1}`} className="rounded-image" />
              <p style={{ color: '#fff', textAlign: 'center' }}>{investor.name}</p>
              <p style={{ fontSize: '15px' }}>{investor.founder}</p>
            </div>
          ))}
        </div>
        
    <button
     className={`arrow-button prev-button ${currentIndex === 0 ? 'disabled' : ''}`}
      onClick={showPrevious}
      disabled={currentIndex === 0}
    >
      ←
    </button>
  
    <button
      className={`arrow-button next-button ${currentIndex + 4 >= investorData.length ? 'disabled' : ''}`}
      onClick={showNext}
      disabled={currentIndex + 4 >= investorData.length}
    >
      →
    </button>
  

        </div>
      </div>
        </div>
      </Content>
        <Footer style={{ textAlign: 'center' , backgroundColor:"#5995cb", color:"white"}}>Created By : Shivangi 😊</Footer>
      </Layout>

    
  );
};

export default App;
