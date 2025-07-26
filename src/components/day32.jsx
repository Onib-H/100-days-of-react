import { useState } from "react";
import {
  Ellipsis,
  ThumbsUpIcon,
  Forward,
  MessageSquare,
  FileSpreadsheet,
  SendHorizontal,
} from "lucide-react";

function Day32() {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    setComments((prev) => [...prev, { comment: commentInput }]);
    setCommentInput("");
  };

  const actions = [
    {
      label: "Like",
      icon: ThumbsUpIcon,
      onClick: handleLike,
      active: liked,
    },
    {
      label: "Comment",
      icon: MessageSquare,
      onClick: () => {},
    },
    {
      label: "Share",
      icon: Forward,
      onClick: () => {},
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-white/80 h-screen">
      <div className="flex flex-col w-[600px] h-[94vh] bg-gray-100 relative z-10 rounded-xl overflow-hidden shadow-md">
        <h2 className="text-center text-xl font-semibold w-full p-3 border-b-2 border-gray-300">
          Harold's Post
        </h2>

        <div className="flex-1 overflow-y-auto ">
          <div className="flex justify-between items-center py-3 px-4 border-b-2 border-gray-300">
            <div>
              <h3 className="font-medium text-base">Harold Aldovino</h3>
              <p className="text-sm">4h - Public</p>
            </div>
            <Ellipsis size={20} />
          </div>

          <div className="w-full h-[350px] border-b-2 border-gray-300 bg-gray-300"></div>

          <div
            className={`flex items-center border-b-2 border-gray-300 ${
              liked || comments.length > 0 ? "py-3 px-4" : "py-6 px-4"
            } ${
              comments.length > 0 && !liked ? "justify-end" : "justify-between"
            }`}
          >
            {liked && (
              <div className="space-x-2 flex">
                <ThumbsUpIcon size={20} color="blue" />
                <p>{liked ? 1 : ""}</p>
              </div>
            )}
            <p>
              {comments.length === 1
                ? "1 comment"
                : comments.length > 1
                ? `${comments.length} comments`
                : ""}
            </p>
          </div>

          <div className="flex items-center border-b-2 border-gray-300 divide-x">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`flex-1 flex items-center justify-center gap-2 py-3 hover:bg-gray-200 transition
        ${action.active ? "text-blue-700 font-semibold" : "text-gray-700"}`}
                onClick={action.onClick}
              >
                <action.icon size={20} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>

          <div
            className={` ${
              comments.length > 0
                ? "p-5 space-y-4"
                : "flex flex-col justify-center items-center p-10"
            }`}
          >
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-10 h-10 bg-gray-500 rounded-full shrink-0"></div>
                  <div className="rounded-2xl bg-white px-4 py-2 shadow text-sm max-w-[80%]">
                    <h4 className="font-semibold">Harold Aldovino</h4>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center text-center">
                <FileSpreadsheet size={100} />
                <h4>No Comment yet</h4>
                <h5>Be the first to comment</h5>
              </div>
            )}
          </div>
        </div>

        <div className="w-full relative border-t border-gray-300">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-white w-full py-3 px-5 text-black/70 pr-10 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddComment();
            }}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-blue-700"
            onClick={handleAddComment}
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day32;
