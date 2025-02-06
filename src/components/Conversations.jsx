import { useState } from "react";
import {
  FaFilter,
  FaPlus,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaClipboard,
  FaEdit,
} from "react-icons/fa";
import { FaClock, FaCalendarAlt, FaPhone, FaEllipsisV } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const conversationsData = [
  {
    id: "Conversation_101",
    time: "09:10",
    date: "04 Sep 24",
    duration: "20.30 min",
    owner: "Vignesh Srinivasan",
    talkRatio: 81,
    type: ["Sales", "Marketing"],
    summary:
      "A customer calls XYZ Services to report slow internet over the past few days. The telecaller, Sarah, verifies the customer's account and runs a diagnostic test. She identifies a signal issue in the area and offers to send a technician for a repair.",
    transcript: [
      {
        time: "00:20",
        speaker: "Ajay",
        text: "Hi, I am Ajay. How can I help you?",
      },
      {
        time: "00:21",
        speaker: "Jaylene",
        text: "Hi, I am facing an issue with my Flipkart app.",
      },
      {
        time: "00:22",
        speaker: "Ajay",
        text: "Can you describe the issue in detail?",
      },
      {
        time: "00:23",
        speaker: "Jaylene",
        text: "I cannot find the return option on my mobile app.",
      },
      {
        time: "00:24",
        speaker: "Ajay",
        text: "Let me check. Are you logged into your account?",
      },
    ],
  },
  {
    id: "Conversation_102",
    time: "10:15",
    date: "04 Sep 24",
    duration: "15.45 min",
    owner: "Amit Verma",
    talkRatio: 55,
    type: ["Admin", "Marketing"],
    summary: "A customer calls regarding a delayed order and needs assistance.",
    transcript: [
      {
        time: "00:10",
        speaker: "Rohan",
        text: "Hello, I need help with my order status.",
      },
      {
        time: "00:12",
        speaker: "Support",
        text: "Can you provide your order ID?",
      },
      { time: "00:14", speaker: "Rohan", text: "Yes, it's 23456789." },
      {
        time: "00:16",
        speaker: "Support",
        text: "The delivery is delayed due to unforeseen issues.",
      },
      {
        time: "00:18",
        speaker: "Rohan",
        text: "Okay, can you provide an estimated delivery date?",
      },
    ],
  },
  {
    id: "Conversation_103",
    time: "11:30",
    date: "05 Sep 24",
    duration: "22.10 min",
    owner: "Sneha Kapoor",
    talkRatio: 42,
    type: ["Sales", "Support"],
    summary:
      "A customer wants assistance with changing their email ID in the system.",
    transcript: [
      {
        time: "00:05",
        speaker: "Neha",
        text: "Hi, I need to change my email ID.",
      },
      {
        time: "00:07",
        speaker: "Support",
        text: "Sure, please confirm your registered phone number.",
      },
      { time: "00:09", speaker: "Neha", text: "It's 9876543210." },
      {
        time: "00:11",
        speaker: "Support",
        text: "A verification OTP has been sent to your phone.",
      },
      {
        time: "00:13",
        speaker: "Neha",
        text: "I received it. The OTP is 123456.",
      },
    ],
  },
  {
    id: "Conversation_104",
    time: "12:45",
    date: "05 Sep 24",
    duration: "18.30 min",
    owner: "Rahul Singh",
    talkRatio: 67,
    type: ["Sales", "Marketing"],
    summary: "Customer inquires about a refund for a defective product.",
    transcript: [
      {
        time: "00:15",
        speaker: "Rahul",
        text: "I received a defective product and need a refund.",
      },
      {
        time: "00:17",
        speaker: "Support",
        text: "Can you share the order ID and product details?",
      },
      {
        time: "00:19",
        speaker: "Rahul",
        text: "Order ID is 9876. The product is a Bluetooth speaker.",
      },
      {
        time: "00:21",
        speaker: "Support",
        text: "We will initiate a refund after verification.",
      },
      {
        time: "00:23",
        speaker: "Rahul",
        text: "Thank you! Please ensure a smooth process.",
      },
    ],
  },
  {
    id: "Conversation_105",
    time: "14:00",
    date: "06 Sep 24",
    duration: "25.00 min",
    owner: "Aishwarya Sharma",
    talkRatio: 59,
    type: ["Support", "Marketing"],
    summary: "Customer seeks guidance on using a new software feature.",
    transcript: [
      {
        time: "00:08",
        speaker: "Sanjay",
        text: "Can you help me with the new update?",
      },
      {
        time: "00:10",
        speaker: "Support",
        text: "Of course! What specifically do you need help with?",
      },
      {
        time: "00:12",
        speaker: "Sanjay",
        text: "How do I enable dark mode in the app?",
      },
      {
        time: "00:14",
        speaker: "Support",
        text: "Go to settings > Display > Enable Dark Mode.",
      },
      { time: "00:16", speaker: "Sanjay", text: "Great! Thank you so much." },
    ],
  },
  {
    id: "Conversation_106",
    time: "15:20",
    date: "06 Sep 24",
    duration: "20.30 min",
    owner: "Vignesh Srinivasan",
    talkRatio: 76,
    type: ["Sales", "Support"],
    summary: "Customer requests help in tracking their lost parcel.",
    transcript: [
      {
        time: "00:25",
        speaker: "Ananya",
        text: "My parcel is missing. Can you track it?",
      },
      {
        time: "00:27",
        speaker: "Support",
        text: "Please provide your tracking number.",
      },
      { time: "00:29", speaker: "Ananya", text: "It's TRK987654." },
      {
        time: "00:31",
        speaker: "Support",
        text: "Your parcel is delayed and will be delivered by tomorrow.",
      },
      {
        time: "00:33",
        speaker: "Ananya",
        text: "Okay, thanks for the update.",
      },
    ],
  },
  {
    id: "Conversation_107",
    time: "16:30",
    date: "07 Sep 24",
    duration: "19.45 min",
    owner: "Naveen Joshi",
    talkRatio: 48,
    type: ["Admin", "Support"],
    summary: "Customer reports login issues and needs password reset.",
    transcript: [
      {
        time: "00:05",
        speaker: "Shreya",
        text: "I am unable to log in to my account.",
      },
      {
        time: "00:07",
        speaker: "Support",
        text: "Have you tried resetting your password?",
      },
      {
        time: "00:09",
        speaker: "Shreya",
        text: "No, I don’t remember my recovery email.",
      },
      {
        time: "00:11",
        speaker: "Support",
        text: "We can send a reset link to your registered phone number.",
      },
      { time: "00:13", speaker: "Shreya", text: "That works! Please send it." },
    ],
  },
  {
    id: "Conversation_108",
    time: "17:45",
    date: "07 Sep 24",
    duration: "22.30 min",
    owner: "Megha Sinha",
    talkRatio: 62,
    type: ["Sales", "Marketing"],
    summary: "Customer inquires about an upcoming product launch.",
    transcript: [
      {
        time: "00:03",
        speaker: "Karan",
        text: "When is the new iPhone launching?",
      },
      {
        time: "00:05",
        speaker: "Support",
        text: "It will be available for pre-order next month.",
      },
      {
        time: "00:07",
        speaker: "Karan",
        text: "What will be the price range?",
      },
      {
        time: "00:09",
        speaker: "Support",
        text: "The starting price is expected to be $999.",
      },
      {
        time: "00:11",
        speaker: "Karan",
        text: "Thanks! I'll pre-order as soon as it opens.",
      },
    ],
  },
];

const Conversations = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredConversations = conversationsData.filter((conv) => {
    const matchesSearch = conv.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter
      ? selectedFilter === "low"
        ? conv.talkRatio < 50
        : selectedFilter === "high"
        ? conv.talkRatio >= 50
        : conv.type.includes(selectedFilter)
      : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-full flex mr-10 justify-between">
          <h1 className="text-2xl font-semibold">All Conversations</h1>
          <div className="relative ">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative inline-block">
            {/* Filter Icon */}
            <div className="absolute inset-y-0 left-3  flex items-center pointer-events-none text-black">
              <FaFilter />
            </div>

            {/* Custom Styled Select */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="pl-10 py-2 w-32 font-xl border border-gray-300 rounded-lg  text-black appearance-none cursor-pointer"
            >
              <option value="">Filter</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Admin">Admin</option>
              <option value="Support">Support</option>
              <option value="low">Low Talk Ratio (%)</option>
              <option value="high">High Talk Ratio (≥ 50%)</option>
            </select>
          </div>
          <button className="flex items-center gap-2  w-40 pl-4  bg-[#5b58e6] text-sm text-white rounded-lg">
            <FaPlus /> Add Conversation
          </button>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr_0.5fr] font-semibold text-gray-600 border-b  pb-2">
          <span>Conversation ID</span>
          <span>Owners</span>
          <span>Talk Ratio</span>
          <span>Type</span>
          <span>Action</span>
        </div>

        {filteredConversations.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">
            No conversations found.
          </p>
        ) : (
          filteredConversations.map((conv, index) => (
            <div key={index} className="border-b   py-4">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr_0.5fr] w-full justify-between py-3 border-b   border-gray-200 hover:bg-gray-50 px-4">
                {/* Conversation ID */}
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">{conv.id}</span>
                  <div className="flex items-center gap-3 text-gray-500 text-sm  w-60">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-blue-500" /> {conv.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-pink-500" /> {conv.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaPhone className="text-green-500" /> {conv.duration}
                    </span>
                  </div>
                </div>

                {/* Owner */}
                <p className="text-gray-700 font-medium">{conv.owner}</p>

                {/* Talk Ratio with Progress Circle */}
                <div className="w-10 h-10">
                  <CircularProgressbar
                    value={conv.talkRatio}
                    text={`${conv.talkRatio}%`}
                    styles={buildStyles({
                      textSize: "32px",
                      textColor:
                        conv.talkRatio < 50
                          ? "#FF4D4D"
                          : conv.talkRatio < 80
                          ? "#FFC107"
                          : "#4CAF50",
                      pathColor:
                        conv.talkRatio < 50
                          ? "#FF4D4D"
                          : conv.talkRatio < 80
                          ? "#FFC107"
                          : "#4CAF50",
                      trailColor: "#e0e0e0",
                    })}
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-col gap-2">
                  {conv.type.map((tag, i) => {
                    // Define colors for different tags
                    const tagColors = {
                      Sales: {
                        bg: "#FFF4E5",
                        border: "#FFC107",
                        text: "#B57208",
                      },
                      Marketing: {
                        bg: "#E3F2FD",
                        border: "#64B5F6",
                        text: "#1976D2",
                      },
                      Admin: {
                        bg: "#F3E5F5",
                        border: "#BA68C8",
                        text: "#6A1B9A",
                      },
                      Support: {
                        bg: "#E8F5E9",
                        border: "#66BB6A",
                        text: "#2E7D32",
                      },
                    };

                    // Get the color for the current tag, fallback to gray
                    const { bg, border, text } = tagColors[tag] || {
                      bg: "#EEEEEE",
                      border: "#BDBDBD",
                      text: "#424242",
                    };

                    return (
                      <span
                        key={i}
                        className="px-2 w-fit py-1 text-xs border rounded-full font-medium"
                        style={{
                          backgroundColor: bg,
                          borderColor: border,
                          color: text,
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Three-dot Menu */}
                <button className="text-gray-600 hover:text-gray-800">
                  <FaEllipsisV />
                </button>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === index ? null : index)
                  }
                  className="text-gray-600 hover:text-gray-800"
                >
                  {expandedId === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {/* Expanded Content: Summary & Transcript */}
              {expandedId === index && (
                <div className="mt-4 p-8 bg-white shadow-md rounded-lg border border-gray-200">
                  {/* Side-by-Side Layout */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Summary Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-48 overflow-auto custom-scrollbar">
                      <h2 className="text-lg font-semibold mb-2">Summary</h2>
                      <p className="text-gray-700 text-sm">{conv.summary}</p>
                    </div>

                    {/* Transcript Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-48 overflow-auto custom-scrollbar">
                      <div className="absolute translate-x-96 -translate-y-[54px] flex justify-end gap-4 mt-4 text-gray-600">
                        <button className="flex items-center gap-2 hover:text-blue-500">
                          <FaThumbsUp />
                        </button>
                        <button className="flex items-center gap-2 hover:text-red-500">
                          <FaEdit />
                        </button>
                        <button className="flex items-center gap-2 hover:text-gray-700">
                          <FaComment />
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-500">
                          <FaClipboard />
                        </button>
                      </div>
                      <h2 className="text-lg font-semibold mb-2">Transcript</h2>
                      <div className="space-y-2">
                        {conv.transcript.map((line, i) => (
                          <div
                            key={i}
                            className="flex items-center bg-white px-3 py-2 rounded-lg shadow"
                          >
                            <span className="text-gray-500 text-xs w-10">
                              {line.time}
                            </span>
                            <span
                              className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs mr-2 ${
                                line.speaker === "Ajay"
                                  ? "bg-blue-500"
                                  : "bg-purple-500"
                              }`}
                            >
                              {line.speaker.charAt(0)}
                            </span>
                            <p className="text-gray-700 text-sm flex-1">
                              {line.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Conversations;
