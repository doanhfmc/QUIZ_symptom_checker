import img from "../img/1.6.jpeg";
import img10 from "../img/Q01_icon 1.png";
import img11 from "../img/Q01_icon Ngua.png";
import img12 from "../img/Q01_icon Kich ung.png";
import img13 from "../img/Q01_icon Dau rat.png";
import img20 from "../img/Q02_Trieuchung 1.png";
import img21 from "../img/Q02_Trieuchung 2.png";
import img22 from "../img/Q02_Trieuchung 3.png";
import img23 from "../img/Q02_Trieuchung 4.png";
import img24 from "../img/Q02_Trieuchung 5.png";
import img25 from "../img/Q02_Trieuchung 6.png";
import img30 from "../img/03 _ CoB.png";
import img31 from "../img/03 _ KhongB.png";

export const questionsData = {
  skin: [
    {
      id: 1,
      text_1: "Câu hỏi 1:",
      text: "Bạn đang gặp phải (hoặc giống nhất) cảm giác nào dưới đây?",
      type: "Có thể chọn nhiều đáp án",
      options: [
        {
          _id: 10,
          text: "Không có cảm giác bất thường",
          img: img10,
        },
        { _id: 11, text: "Ngứa", img: img11 },
        { _id: 12, text: "Kích ứng", img: img12 },
        { _id: 13, text: "Đau rát", img: img13 },
      ],
    },
    {
      id: 2,
      text_1: "Câu hỏi 2:",
      text: "Triệu chứng nào được miêu tả gần giống nhất với vấn đề của bạn?",
      type: "Chỉ chọn một đáp án",
      options: [
        {
          _id: 20,
          text: (
            <p>
              Các mảng đỏ tròn hoặc bầu dục, ở giữa lành, viền xung quanh có vảy{" "}
              <sup>1</sup>; Thường xuất hiện ở thân mình, cổ, tay hoặc chân
              <sup>1</sup>.
            </p>
          ),
          desc: (
            <p>
              {" "}
              1. Yee G, Al Aboud AM. Tinea Corporis. [Updated 2021 Dec 22]. In:
              StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK544360/"
                target="_blank"
              >
                {" "}
                https://www.ncbi.nlm.nih.gov/books/NBK544360/
              </a>{" "}
            </p>
          ),

          img: img20,
        },
        {
          _id: 21,
          text: (
            <p>
              Các mảng đỏ, có vảy, hình tròn; Thường xuất hiện ở da đầu, mặt,
              cổ, tay, thân hoặc bàn chân <sup>2-4</sup>
            </p>
          ),
          desc: (
            <p>
              2. Baumgardner DJ. Fungal Infections from Human and Animal
              Contact. J Patient Cent Res Rev. 2017 Apr 25; 4(2):78–89. doi:
              10.17294/2330-0698.1418. PMID: 31413974; PMCID: PMC6664368. <br />
              3. Deng S, Bulmer GS, Summerbell RC, et al. Changes in Frequency
              of Agents of Tinea Capitis in School Children from Western China
              Suggest Slow Migration Rates in Dermatophytes. Sabouraudia. 2008
              Aug; 46(5):421–7. <br />
              4. Tan JS. Human Zoonotic Infections Transmitted by Dogs and Cats.
              Arch Int Med. 1997 Sep 22; 157(17):1933–43.
            </p>
          ),

          img: img21,
        },
        {
          _id: 22,
          text: (
            <p>
              Da bong tróc từ đỏ đến trắng bạc, có thể nứt nẻ; Thường xuất hiện
              giữa các ngón chân. Có thể có mùi hôi <sup>5,6</sup>
            </p>
          ),
          desc: (
            <p>
              5.Nigam PK, Saleh D. Tinea Pedis. 2021 Jun 7. In: StatPearls
              [Internet]. Treasure Island (FL): StatPearls Publishing; 2022 Jan.
              PMID: 29262247. <br />
              6. Ely JW, Rosenfeld S, Seabury Stone M. Diagnosis and Management
              of Tinea Infections. Am Fam Physician. 2014; 90(10):702–10.
            </p>
          ),

          img: img22,
        },
        {
          _id: 23,
          text: (
            <p>
              Mảng đỏ viền rõ, có vảy; Thường xuất hiện ở vùng nếp gấp như háng
              hoặc vùng kín <sup>7-9</sup>
            </p>
          ),
          desc: (
            <p>
              7. Pippin MM, Madden ML. Tinea Cruris. [Updated 2022 Feb 17]. In:
              StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK554602/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK554602/{" "}
              </a>{" "}
              . <br />
              8. Havlickova B, Czaika VA, Friedrich M. Epidemiological Trends in
              Skin Mycoses Worldwide [Published correction appears in Mycoses.
              2009 Jan; 52(1):95]. Mycoses. 2008; 51 Suppl 4. 2–15.
              doi:10.1111/j.1439-0507.2008.01606.x. <br />
              9. Deshmukh SG, Thakre T, Gupta J, et al. A Case Study on
              Management of Tinea Cruris with Classical Vaman Karma. JPRI. 2021;
              33(33B):195–202.
            </p>
          ),

          img: img23,
        },
        {
          _id: 24,
          text: (
            <p>
              Mảng da có màu nâu, hồng hoặc trắng có ranh giới rõ ràng, hơi vảy
              và lan rộng trên thân, cổ, hoặc lưng <sup>10,11</sup>
            </p>
          ),
          desc: (
            <p>
              10. Karray M, McKinney WP. Tinea Versicolor. [Updated 2021 Aug
              11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK482500/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK482500/
              </a>{" "}
              .<br />
              11. Hu SW and Bigby M. Pityriasis Versicolor. Arch Dermatol. 2010
              Oct 1; 146(10):1132–40.
            </p>
          ),

          img: img24,
        },
        {
          _id: 25,
          text: (
            <p>
              Mảng đỏ hoặc nâu, có vảy, thường xuất hiện ở các nếp gấp như giữa
              ngón chân, vùng háng <sup>12-13</sup>
            </p>
          ),
          desc: (
            <p>
              12. Forouzan P, Cohen PR. Erythrasma Revisited: Diagnosis,
              Differential Diagnoses, and Comprehensive Review of Treatment.
              Cureus. 2020; 12(9):e10733. <br />
              13. Groves JB, Nassereddin A, Freeman AM. Erythrasma. [Updated
              2021 Aug 11]. In: StatPearls [Internet]. Treasure Island (FL):
              StatPearls Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK513352/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK513352/
              </a>{" "}
              .
            </p>
          ),

          img: img25,
        },
      ],
    },
    {
      id: 3,
      text_1: "Câu hỏi 3:",
      text: "Bạn có tiếp xúc với động vật nuôi như mèo, chó, thỏ hoặc nhím gần đây không? (Có/Không) ",
      type: "",
      options: [
        { _id: 30, text: "Có", img: img30 },
        { _id: 31, text: "Không", img: img31 },
      ],
    },
  ],
  intimate: [
    {
      id: 1,
      text_1: "Câu hỏi 1",
      text: "Bạn đang gặp phải triệu chứng nào ở vùng kín?",
      type: "Chọn nhiều đáp án nếu có",
      options: [
        { _id: 10, text: "Không có cảm giác bất thường", img: img },
        { _id: 11, text: "Ngứa", img: img },
        { _id: 12, text: "Đau nhức", img: img },
        { _id: 13, text: "Kích ứng", img: img },
        { _id: 14, text: "Nóng rát", img: img },
        { _id: 15, text: "Cảm giác châm chích", img: img },
        {
          _id: 16,
          text: "Tiểu buốt (Đau hoặc nóng rát khi đi tiểu)",
          img: img,
        },
        {
          _id: 17,
          text: "Đau khi quan hệ (Đau trong hoặc sau khi quan hệ tình dục)",
          img: img,
        },
      ],
    },
    {
      id: 2,
      text_1: "Câu hỏi 2",
      text: "Theo cảm nhận của bạn, mùi dịch âm đạo của bạn như thế nào? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 20, text: "Không có mùi", img: img },
        { _id: 21, text: "Mùi tanh cá", img: img },
        { _id: 22, text: "Mùi hôi", img: img },
      ],
    },

    {
      id: 3,
      text_1: "Câu hỏi 3",
      text: "Bạn có nhận thấy sự thay đổi về lượng dịch âm đạo (không tính máu kinh nguyệt) so với trước đây không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 30, text: "Không có thay đổi về lượng dịch", img: img },
        { _id: 31, text: "Dịch âm đạo nhiều hơn", img: img },
        { _id: 32, text: "Dịch âm đạo ít hơn", img: img },
      ],
    },
    {
      id: 4,
      text_1: "Câu hỏi 4",
      text: "Dựa vào quan sát của bạn, dịch âm đạo giống với hình ảnh nào nhất?",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 40, text: "Trong, loãng hoặc trắng", img: img },
        { _id: 41, text: "Vàng nhạt, loãng", img: img },
        { _id: 42, text: "Trắng xám, loãng", img: img },
        {
          _id: 43,
          text: "Đặc, vón cục, màu trắng đục đến vàng nhạt",
          img: img,
        },
        { _id: 44, text: "Có mủ, sủi bọt, màu vàng xanh", img: img },
        {
          _id: 45,
          text: "Đỏ nâu vón cục (không phải trong kỳ kinh nguyệt)",
          img: img,
        },
      ],
    },
    {
      id: 5,
      text_1: "Câu hỏi 5",
      text: " Bạn có bị sốt không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 50, text: "Có", img: img },
        { _id: 51, text: "Không", img: img },
      ],
    },
    {
      id: 6,
      text_1: "Câu hỏi 6",
      text: "Bạn có cảm thấy đau ở vùng bụng dưới không? ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 60, text: "Có", img: img },
        { _id: 61, text: "Không", img: img },
      ],
    },

    {
      id: 7,
      text_1: "Câu hỏi 7",
      text: "Bạn có đi tiểu nhiều lần hơn bình thường không?  ",
      type: "Chỉ chọn một đáp án",
      options: [
        { _id: 70, text: "Có", img: img },
        { _id: 71, text: "Không", img: img },
      ],
    },
    {
      id: 8,
      text_1: "Câu hỏi 8",
      text: "Nước tiểu của bạn có kèm theo triệu chứng nào dưới đây không? ",
      type: "Chọn nhiều đáp án nếu có",
      options: [
        { _id: 80, text: "Nước tiểu đục", img: img },
        { _id: 81, text: "Có máu trong nước tiểu", img: img },
        { _id: 82, text: "Nước tiểu có mùi hôi lạ", img: img },
        { _id: 83, text: "Không có triệu chứng bất thường", img: img },
      ],
    },
  ],
};
