import PropTypes from 'prop-types';

const PageTitle = ({ count, title }) => {
	
	return (
		<h2>{ count } { title }</h2>
	);
};

export default PageTitle;

PageTitle.propTypes = {
	count: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};