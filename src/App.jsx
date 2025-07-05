import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componend/Navbar/Navbar';
import ProtectedRoute from './Routes/ProtectedRoute';
import Loader from './pages/Loader'; // add this or customize
import CourseDetiles from './componend/Home/CourseDetiles'
import ScrollToTop from './pages/ScrollToTop';


// 🔀 Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const PendingApproval = lazy(() => import('./pages/PendingApproval'));
const EmailLinkSignIn = lazy(() => import('./pages/EmailLinkSignIn'));
const FinishSignIn = lazy(() => import('./pages/FinishSignIn'));
const GoogleSuccess = lazy(() => import('./pages/GoogleSuccess'));
const GoogleCallbackPage = lazy(() => import('./pages/GoogleCallbackPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));

// 🔀 Course components
const Coursespage = lazy(() => import('./componend/Course/CoursesPage'));
const CourseDetailsPage = lazy(() => import('./componend/Course/CourseDetailsPage'));
const WishlistPage = lazy(() => import('./componend/Course/WishlistPage'));
const PrivateCoursePage = lazy(() => import('./componend/Privatecoursepage/PrivateCoursePage'));

// 🔀 Journalist & Articles
const MeetJournalistPage = lazy(() => import('./componend/Journalist/MeetJournalistPage'));
const ArticlePage = lazy(() => import('./componend/Article/ArticlePage'));
const SingleArticlePage = lazy(() => import('./componend/Article/SingleArticlePage'));
const BlogDetailsPage = lazy(() => import('./componend/Article/BlogDetailsPage'));

// 🔀 Other
const UpcomingSessionsPage = lazy(() => import('./upcomingSession/UpcomingSessionsPage'));
// const CourseDetiles = lazy(()=>import('./componend/Home/CourseDetiles'))


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pending" element={<PendingApproval />} />
          <Route path="/signin-email-link" element={<EmailLinkSignIn />} />
          <Route path="/finishSignIn" element={<FinishSignIn />} />
          <Route path="/auth/success" element={<GoogleSuccess />} />
          <Route path="/auth/google/callback" element={<GoogleCallbackPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage />} />

          {/* 🧠 Course Routes */}
          <Route path="/courses" element={<Coursespage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route
            path="/course/private"
            element={
              <ProtectedRoute>
                <PrivateCoursePage />
              </ProtectedRoute>
            }
          />

          {/* 📰 Articles & Journalists */}
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/journalist" element={<MeetJournalistPage />} />

          {/* 📅 Upcoming Sessions */}
          <Route path="/session" element={<UpcomingSessionsPage />} />
          <Route path='/coursedetiles' element={<CourseDetiles/>}/>
          <Route path='/coursedetiles/:id' element={<CourseDetiles/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;




