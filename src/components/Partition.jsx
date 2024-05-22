import React, { useState } from "react";
import "../css/Partition.css";

// Function for generating a random color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Partition = ({ id = 0, onRemove }) => {
    // State to keep track of all partitions
    const [partitions, setPartitions] = useState([]);
    // State to keep track of the current color
    const [color, setColor] = useState(getRandomColor());

    // Function to handle splitting the partition
    const handleSplit = (direction) => {
        // Create two new partitions
        setPartitions([
        { id: id * 2 + 1, direction },
        { id: id * 2 + 2, direction },
        ]);
    };

    // Function to handle removing a partition
    const handleRemove = () => {
        onRemove(id);
    };

    return (
        <>
            <div
            className="partition "
            style={{ backgroundColor: color, height: "560px" }}
            >
                {partitions.length === 0 && (
                    <div className="controls">
                    <button onClick={() => handleSplit("v")}>V</button>
                    <br />
                    <button onClick={() => handleSplit("h")}>H</button>
                    {id !== 0 && <button onClick={handleRemove}>-</button>}
                    </div>
                )}
                {partitions.length > 0 && (
                    <div className={`split-${partitions[0].direction}`}>
                    {partitions.map((part) => (
                        <Partition
                        key={part.id}
                        id={part.id}
                        onRemove={(id) =>
                            setPartitions(partitions.filter((p) => p.id !== id))
                        }
                        />
                    ))}
                    </div>
                )}
            </div>
        </>
  );
};

export default Partition;
