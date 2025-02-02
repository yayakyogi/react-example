import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface Props {
  title: string;
}

const Modal = forwardRef(({ title }: Props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    showModal: () => setIsModalOpen(true),
  }));

  return (
    isModalOpen && (
      <div>
        <h2>{title}</h2>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </div>
    )
  );
});

const UseImperativeHandle: React.FC = () => {
  const modalRef = useRef<any>(null);

  return (
    <div>
      <button onClick={() => modalRef.current.showModal()}>Show Modal</button>
      <Modal ref={modalRef} title="Judul Modal" />
    </div>
  );
};

export default UseImperativeHandle;
