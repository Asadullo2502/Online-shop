import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';
import { BasketIcon } from 'src/assets/svg';
import './Main.scss';

type MainType = {
	title: string;
} & Pick<HTMLProps<HTMLElement>, 'children'>;

const Main: React.FC<MainType> = ({ children, title }) => {
	return (
		<div className='main'>
			<div className='main-header'>
				<div className='container'>
					<Link to={`/`} className='main-header__logo'>
						Logo
					</Link>
					<div className='main-header-right'>
						<Link to={`/basket`}>
							<BasketIcon />
						</Link>
					</div>
				</div>
			</div>
			<div className='main-body'>
				<div className='main-body-top'>
					<h2>{title}</h2>
				</div>
				<div className='main-body-content'>{children}</div>
			</div>
			<div className='main-footer'>
				<div className='container'>
					<div className='main-footer-items'>
						<Link to={`/`} className='main-footer__logo'>
							Logo
						</Link>
						<p>
							<span className='main-footer__text'>contact to us: </span>
							<a className='main-footer__tel' href='tel:993002307'>
								+998(99) 300 2307
							</a>
						</p>
					</div>
					<div className='main-footer__about'>
						<p>About company</p>
						<ul className='main-footer__about-list'>
							<li className='main-footer__about-item'>
								<a className='main-footer__about-link' href=''>
									Products
								</a>
							</li>
							<li className='main-footer__about-item'>
								<a className='main-footer__about-link' href=''>
									Blog about company life
								</a>
							</li>
							<li className='main-footer__about-item'>
								<a className='main-footer__about-link' href=''>
									Press center
								</a>
							</li>
						</ul>
					</div>

					<div className='main-footer__network'>
						<p>We are in social networks</p>
						<ul className='main-footer__network-list'>
							<li className='main-footer__network-item'>
								<a className='main-footer__network-link' href=''>
									In contact with
								</a>
							</li>
							<li className='main-footer__network-item'>
								<a className='main-footer__network-link' href=''>
									Classmates
								</a>
							</li>
							<li className='main-footer__network-item'>
								<a className='main-footer__network-link' href=''>
									Telegram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
