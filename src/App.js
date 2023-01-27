import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from "./screens/ProductScreen"
import HomeScreen from './screens/HomeScreen'
import Product from "./components/Product";


function App() {
    return (
        <Router>
            <Header/>
            <main className="py-4">
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen/>} exact/>
                        <Route path='/product/:id' element={<ProductScreen/>} />
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
