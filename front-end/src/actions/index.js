import withBody from './with_body';
import noBody from './no_body';

export const fetchBlogs = noBody('index');
export const fetchBlog = noBody('show');
export const createBlog = withBody();
export const updateBlog = withBody(false);
export const deleteBlog = noBody('destroy');
