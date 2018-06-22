import React, { Component, PropTypes } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { searchTopNewsAction, searchAnyNewsAction, searchSourceNewsAction } from '../actions/newsActions';
import ArticlesPage from '../components/ArticlesPage';
import CategoryPage from '../components/CategoryPage';
import * as sources from '../constants/newsSources';

// NewsPage Component
class NewsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",

    }
  }
  componentDidMount() {
    const { searchTopNewsAction } = this.props
    searchTopNewsAction();
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleSearch = () => {
    const { searchTopNewsAction, searchAnyNewsAction } = this.props;
    let searchText = this.state.searchText;
      (searchText === "") ? searchTopNewsAction() : searchAnyNewsAction(searchText)
  }

  onCategoryClick = (value) => {
    const { searchTopNewsAction, searchSourceNewsAction } = this.props;
    this.setState({searchText: ""});
    (value === sources.ALL) ? searchTopNewsAction() : searchSourceNewsAction(value)
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="container-fluid">
        {articles ? <div>
          <div className="row" style={{ margin: '20px' }}>
            <input type="text" value={this.state.searchText} onChange={this.handleChange} style={{ padding: '5px' }} />
            <button className="btn btn-primary btn-search" value="Search Library" onClick={this.handleSearch} style={{ marginLeft: '10px' }}>Search News</button>
          </div>
          <div className="row ">
            <CategoryPage onCategoryClick={this.onCategoryClick} />
            <ArticlesPage articles={articles} />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }

}

NewsPage.propTypes = {

  articles: PropTypes.array
};
const mapStateToProps = ({ news }) => ({
  articles: news.articles,
});

const mapDispatchToProps = dispatch => ({
  searchTopNewsAction: () => dispatch(searchTopNewsAction()),
  searchAnyNewsAction: payload => dispatch(searchAnyNewsAction(payload)),
  searchSourceNewsAction: payload => dispatch(searchSourceNewsAction(payload)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(NewsPage)

// connect method from react-router connects the component with redux store
// export default connect(
//   mapStateToProps)(NewsPage);