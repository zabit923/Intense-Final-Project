import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from "../../components/Tags";
import styles from "./style.module.css"
import PaginationItem from '../../components/Pagination';
import { tags } from '../../tags';

const allArticles = [
  {
      id: 1, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 2, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 3, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 4, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 5, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 6, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 7, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
  {
      id: 8, 
      category: 'MINIMALISM',
      title: 'Culpa sit Laboris Exercitation ea Fugiat',
      author: 'Leslie Pena',
      date: 'April 25, 2012 (6 mins read)',
      description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
      image: '../../../src//assets/example-article.png'
  },
]


function LikedArticles() {
  return (
    <div className={styles.likedArticles}>
        <div className={styles.likedArticlesContainer}>
                <div className={styles.likedArticlesTitleBlock}>
                    <h1>Liked articles</h1>
                    <div className={styles.decorLine}></div>
                </div>
                <div className={styles.likedArticlesContent}>
                    <HomePageArticles articles={allArticles}/>
                    <Tags tags={tags} />
                </div>
            </div>
            <PaginationItem />
    </div>
  )
}

export default LikedArticles;