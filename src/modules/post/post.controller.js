import * as postService from './post.service';

export function list(req, res) {
  postService.sample();
  res.send('post list api working');
}
