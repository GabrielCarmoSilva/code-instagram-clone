import './App.css';
import Footer from './Footer';
import PostList from './PostList';
import Header from './Header';

const posts = [
  {
      userName: "Gabriel Silva",
      image: "https://media-exp1.licdn.com/dms/image/C4E1BAQHL_wUxS-bCKg/company-background_10000/0?e=2159024400&v=beta&t=3HdnPDimuYPZ9cG_6luD380mbXO9u0dih1J4xY6JRA0",
      message: 'App Masters',
      profilePic: "https://prospectdirect.com/wpstagemct/wp-content/uploads/2017/05/generic-profile-photo-3.jpg",
  },
  {
      userName: "Beatriz Romero",
      image: "https://biadias.com.br/imgs/bia/bia-intro.jpg",
      message: 'Meu nome é Bia Dias',
      profilePic: "https://prospectdirect.com/wpstagemct/wp-content/uploads/2017/05/generic-profile-photo-3.jpg",
  }
];


function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
