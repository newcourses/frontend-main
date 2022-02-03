import React from 'react';
import styles from '../styles/Home.module.css';
import CourseCard from '../components/CourseCard/CourseCard';
import Main from '../layouts/Main/Main';
import CourseDirections from '../containers/CourseDirections/CourseDirections';

export default function Home() {
  return (
    <Main>
      <div className={styles.container}>
        <main className={styles.main}>
          <CourseDirections
            directions={[
              {
                title: 'Управление',
                subDirection: [
                  { title: 'Product-менеджмент', link: '/' },
                  { title: 'Управление бизнесом', link: '/' },
                  { title: 'Финансовая аналитика', link: '/' },
                  { title: 'HR и управление персоналом', link: '/' },
                  { title: 'Test5', link: '/' },
                ],
              },
              {
                title: 'Управление',
                subDirection: [
                  { title: 'Product-менеджмент', link: '/' },
                  { title: 'Управление бизнесом', link: '/' },
                  { title: 'Финансовая аналитика', link: '/' },
                  { title: 'HR и управление персоналом', link: '/' },
                  { title: 'Test5', link: '/' },
                ],
              },
              {
                title: 'Управление',
                subDirection: [
                  { title: 'Product-менеджмент', link: '/' },
                  { title: 'Управление бизнесом', link: '/' },
                  { title: 'Финансовая аналитика', link: '/' },
                  { title: 'HR и управление персоналом', link: '/' },
                  { title: 'Test5', link: '/' },
                ],
              },
              {
                title: 'Управление',
                subDirection: [
                  { title: 'Product-менеджмент', link: '/' },
                  { title: 'Управление бизнесом', link: '/' },
                  { title: 'Финансовая аналитика', link: '/' },
                  { title: 'HR и управление персоналом', link: '/' },
                  { title: 'Test5', link: '/' },
                ],
              },
              {
                title: 'Управление',
                subDirection: [
                  { title: 'Product-менеджмент', link: '/' },
                  { title: 'Управление бизнесом', link: '/' },
                  { title: 'Финансовая аналитика', link: '/' },
                  { title: 'HR и управление персоналом', link: '/' },
                  { title: 'Test5', link: '/' },
                ],
              },
            ]}
          />

          <CourseCard />
        </main>
      </div>
    </Main>
  );
}
