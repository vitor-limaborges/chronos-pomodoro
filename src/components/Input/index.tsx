import styles from './styles.module.css';

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, labelText, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
