// ** core
import React from 'react';
// ** css
import '../css/views/HomeScreen.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../config/showToast';
// ** import components
import CompanyPanel from '../components/Home/CompanyPanel';


function HomeScreen() {
        return (
                <main className='main-container'>

                        <header id='header-Container'>
                                <div id='logo-container'>
                                        <img src={require('../assets/logo-b.png')} id="header-logo" />
                                        <h3 id='logo-text'>Gadjet Mart</h3>
                                </div>

                                <div id='header-action-container'>
                                        <div>
                                                <img src={require('../assets/cart.png')} id="header-cart-logo" />
                                                <Badge color="warning" pill id='header-cart-badge'>3</Badge>
                                        </div>
                                        <img src={require('../assets/log-out.png')} id="header-logout-logo" />

                                </div>
                        </header>



                        <div id='toggle-button-Container'>
                                {/* button 01 */}
                                <Button
                                        color={true ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() => showFailedToast("Failed")}
                                >
                                        Abans
                                </Button>

                                {/* button 02 */}
                                <Button
                                        color={false ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() => showFailedToast("Failed")}
                                >
                                        Singer
                                </Button>

                                {/* button 03 */}
                                <Button
                                        color={false ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() => showFailedToast("Failed")}
                                >
                                        Softlogic
                                </Button>
                        </div>


                        <section>
                                <CompanyPanel />
                        </section>

                </main>
        )
}

export default HomeScreen;