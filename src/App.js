import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from "./screens/ProductScreen"
import HomeScreen from './screens/HomeScreen'
import CartScreen from "./screens/CartScreen";


function App() {
    return (
        <Router>
            <Header/>
            <main className="py-4">
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen/>} exact/>
                        <Route path='/product/:id' element={<ProductScreen/>} />
                        <Route path='/cart/:id?' element={<CartScreen/>} />
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
