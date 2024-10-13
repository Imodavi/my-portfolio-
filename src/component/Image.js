import Image from 'next/image';
import styles from '../styles/ComponentName.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <Image
        src="/profile.jpg" // Ensure you place this image in the public folder
        alt="Profile Picture"
        width={200}
        height={200}
      />
    </div>
  );
};

export default MyComponent;
