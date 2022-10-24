import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaLinkedin } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className="mb-1 text-primary border" variant="white"><FaGoogle className='me-1'></FaGoogle>Login With Google</Button>
                <Button className='text-black border' variant="white"><FaGithub className='me-1'></FaGithub>Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp />Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch />Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedin />Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;