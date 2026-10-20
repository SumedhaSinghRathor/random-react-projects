import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup } from "motion/react";
import reads from "./reads.json";
import Card from "./Card";
import Dialog from "./Dialog";

const readsSorted = [...reads].sort((a, b) => a.title.localeCompare(b.title));

export default function Reads() {
  const [selected, setSelected] = useState(null);
  const [cardRect, setCardRect] = useState(null);
  const [closing, setClosing] = useState(false);
  const cardRef = useRef(new Map());

  function openRead(read) {
    const element = cardRef.current.get(read.title);
    if (!element) return;

    const rect = element.getBoundingClientRect();

    setCardRect({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });

    setClosing(false);
    setSelected(read);
  }

  function closeRead() {
    setClosing(true);
  }

  return (
    <LayoutGroup>
      <section
        className="grid grid-cols-12 w-screen gap-1 p-1"
        style={{ fontFamily: "Instrument Serif" }}
      >
        <div className="aspect-2/3 bg-black" />
        {readsSorted.slice(0, 4).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        {Array.from({ length: 2 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {readsSorted.slice(4, 8).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        <div className="aspect-2/3 bg-black" />
        {readsSorted.slice(8, 32).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        <div className="aspect-2/3 bg-black" />
        {readsSorted.slice(32, 42).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        <div className="aspect-2/3 bg-black" />
        {Array.from({ length: 2 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {readsSorted.slice(42, 50).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        {Array.from({ length: 2 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {Array.from({ length: 3 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {readsSorted.slice(50, 56).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        {Array.from({ length: 3 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {Array.from({ length: 4 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {readsSorted.slice(56, 60).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        {Array.from({ length: 4 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {Array.from({ length: 5 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
        {readsSorted.slice(60, 62).map((r) => (
          <Card
            key={r.title}
            info={r}
            onClick={() => openRead(r)}
            isSelected={selected?.title === r.title}
            cardRef={(node) => {
              if (node) cardRef.current.set(r.title, node);
              else cardRef.current.delete(r.title);
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_) => (
          <div className="aspect-2/3 bg-black" />
        ))}
      </section>

      <AnimatePresence>
        {selected && cardRect && (
          <Dialog
            selected={selected}
            cardRect={cardRect}
            closing={closing}
            onCloseComplete={() => {
              setSelected(null);
              setCardRect(null);
              setClosing(false);
            }}
            onClose={closeRead}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
