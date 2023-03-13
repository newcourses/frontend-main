import PostGetList from './getList';

class PostController {
  static getList(query, type = 'request') {
    return PostGetList[type](query);
  }
}

export default PostController;
