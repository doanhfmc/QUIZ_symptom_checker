import img from "../img/1.6.jpeg";
export const questionsData = {
  skin: [
    {
      id: 1,
      text_1: "Câu hỏi 1",
      text: "Bạn đang gặp phải triệu chứng nào dưới đây?",
      type: "Có thể chọn nhiều đáp án",
      options: [
        { _id: 10, text: "Không có cảm giác bất thường", img: img },
        { _id: 11, text: "Ngứa", img: img },
        { _id: 12, text: "Kích ứng", img: img },
        { _id: 13, text: "Đau rát", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Câu hỏi 2",
      text: "Triệu chứng nào được miêu tả gần giống nhất với vấn đề của bạn?",
      type: "Chỉ chọn một đáp án",
      options: [
        {
          _id: 20,
          text: "Các mảng đỏ tròn hoặc bầu dục, ở giữa lành, viền xung quanh có vảy. Thường xuất hiện ở thân mình, cổ, tay hoặc chân.",
          desc: "Các mảng đỏ tròn hoặc bầu dục, ở giữa lành, viền xung quanh có vảy. Thường xuất hiện ở thân mình, cổ, tay hoặc chân.",

          img: img,
        },
        {
          _id: 21,
          text: "Các mảng đỏ, có vảy, hình tròn. Thường xuất hiện ở  da đầu, mặt, cổ, tay, thân hoặc bàn chân.",
          desc: "Các mảng đỏ, có vảy, hình tròn. Thường xuất hiện ở  da đầu, mặt, cổ, tay, thân hoặc bàn chân.",

          img: img,
        },
        {
          _id: 22,
          text: "Da bong tróc từ đỏ đến trắng bạc, có thể nứt nẻ Thường xuất hiện giữa các ngón chân Có thể có mùi hôi.",
          desc: "Da bong tróc từ đỏ đến trắng bạc, có thể nứt nẻ Thường xuất hiện giữa các ngón chân Có thể có mùi hôi.",

          img: img,
        },
        {
          _id: 23,
          text: "Mảng đỏ viền rõ, có vảy Thường xuất hiện ở vùng nếp gấp như háng hoặc vùng kín",
          desc: "Mảng đỏ viền rõ, có vảy Thường xuất hiện ở vùng nếp gấp như háng hoặc vùng kín",

          img: img,
        },
        {
          _id: 24,
          text: "Mảng da có màu nâu, hồng hoặc trắng, hơi vảy và lan rộng trên thân, cổ, hoặc lưng",
          desc: "Mảng da có màu nâu, hồng hoặc trắng, hơi vảy và lan rộng trên thân, cổ, hoặc lưng",

          img: img,
        },
        {
          _id: 25,
          text: "Mảng đỏ hoặc nâu, có vảy, thường xuất hiện ở các nếp gấp như giữa ngón chân, vùng háng",
          desc: "Mảng đỏ hoặc nâu, có vảy, thường xuất hiện ở các nếp gấp như giữa ngón chân, vùng háng",

          img: img,
        },
      ],
    },
    {
      id: 3,
      text_1: "Câu 3",
      text: "Bạn có tiếp xúc với động vật nuôi như mèo, chó, thỏ hoặc nhím gần đây không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 30, text: "Có", img: img },
        { _id: 31, text: "Không", img: img },
      ],
    },
  ],
  intimate: [
    {
      id: 1,
      text_1: "Câu 1",
      text: " Bạn có bị sốt không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 10, text: "Có", img: img },
        { _id: 11, text: "Không", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Câu 2",
      text: "Bạn có cảm thấy đau ở vùng bụng dưới không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 20, text: "Có", img: img },
        { _id: 21, text: "Không", img: img },
      ],
    },
    {
      id: 3,
      text_1: "Câu 3",
      text: "Bạn đang gặp phải triệu chứng nào ở vùng kín?",
      type: "Chọn nhiều đáp án nếu có",
      options: [
        { _id: 30, text: "Không có cảm giác bất thường", img: img },
        { _id: 31, text: "Ngứa", img: img },
        { _id: 32, text: "Đau nhức", img: img },
        { _id: 33, text: "Kích ứng", img: img },
        { _id: 34, text: "Nóng rát", img: img },
        { _id: 35, text: "Cảm giác châm chích", img: img },
        {
          _id: 36,
          text: "Tiểu buốt (Đau hoặc nóng rát khi đi tiểu)",
          img: img,
        },
        {
          _id: 37,
          text: "Đau khi quan hệ (Đau trong hoặc sau khi quan hệ tình dục)",
          img: img,
        },
      ],
    },
    {
      id: 4,
      text_1: "Câu 4",
      text: "Theo cảm nhận của bạn, mùi dịch âm đạo của bạn như thế nào? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 40, text: "Không có mùi", img: img },
        { _id: 41, text: "Mùi tanh cá", img: img },
        { _id: 42, text: "Mùi hôi", img: img },
        { _id: 43, text: "Sore", img: img },
      ],
    },
    {
      id: 5,
      text_1: "Câu 5",
      text: "Dựa vào quan sát của bạn, dịch âm đạo giống với hình ảnh nào nhất?",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 50, text: "Trong, loãng hoặc trắng", img: img },
        { _id: 51, text: "Vàng nhạt, loãng", img: img },
        { _id: 52, text: "Trắng xám, loãng", img: img },
        {
          _id: 53,
          text: "Đặc, vón cục, màu trắng đục đến vàng nhạt",
          img: img,
        },
        { _id: 54, text: "Có mủ, sủi bọt, màu vàng xanh", img: img },
        {
          _id: 55,
          text: "Đỏ nâu vón cục (không phải trong kỳ kinh nguyệt)",
          img: img,
        },
      ],
    },
    {
      id: 6,
      text_1: "Câu 6",
      text: "Bạn có nhận thấy sự thay đổi về lượng dịch âm đạo (không tính máu kinh nguyệt) so với trước đây không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 60, text: "Không có thay đổi về lượng dịch", img: img },
        { _id: 61, text: "Dịch âm đạo nhiều hơn", img: img },
        { _id: 62, text: "Dịch âm đạo ít hơn", img: img },
      ],
    },
    {
      id: 7,
      text_1: "Câu 7",
      text: "Bạn có đi tiểu nhiều lần hơn bình thường không?  ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 70, text: "img1", img: img },
        { _id: 71, text: "img2", img: img },
      ],
    },
    {
      id: 8,
      text_1: "Câu 8",
      text: "Nước tiểu của bạn có kèm theo triệu chứng nào dưới đây không? ",
      type: "Chọn nhiều đáp án nếu có",
      options: [
        { _id: 80, text: "Nước tiểu đục", img: img },
        { _id: 81, text: "Có máu trong nước tiểu", img: img },
        { _id: 82, text: "Nước tiểu có mùi hôi lạ", img: img },
      ],
    },
  ],
};
