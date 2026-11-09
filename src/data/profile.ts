export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  role: string;
  category: 'data' | 'ai' | 'web';
  categoryLabel: string;
  githubUrl: string;
  articleUrl?: string;
  summary: string;
  highlights: string[];
  architectureFlow: string[];
  techStack: string[];
  status: string;
}

export interface TechToolItem {
  id: string;
  name: string;
  category: 'data' | 'ai' | 'db' | 'infra';
  categoryLabel: string;
  purpose: string;
  usedIn: string;
  relatedUrl: string;
  tags: string[];
}

export interface StudentMilestone {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'internship' | 'achievement' | 'activity';
  imageFolder: string;
  blogUrl?: string;
}

export interface RoadmapItem {
  horizon: '2022 - 2026' | '2027' | 'DÀI HẠN';
  horizonLabel: string;
  title: string;
  category: string;
  description: string;
  badgeType: 'de' | 'life' | 'future';
}

export const SITE_PROFILE = {
  name: 'Nguyễn Đình Văn',
  handle: 'nguyendinhvan.blog',
  avatar: '/avatar.jpg',
  role: 'Cử nhân CNTT (ĐH Quy Nhơn) • Hướng tới Màu Xanh Áo Lính 2027',
  shortRole: 'CNTT • ĐH Quy Nhơn',
  tagline: 'Từ giảng đường Công nghệ Thông tin đến ước mơ khoác lên mình màu áo Quân đội Nhân dân Việt Nam.',
  bio: 'Mình là Nguyễn Đình Văn (Quy Nhơn, Gia Lai) — tốt nghiệp Cử nhân Công nghệ Thông tin (Hệ thống Thông tin) tại Trường Đại học Quy Nhơn và từng thực tập Data Engineering tại TMA Solutions Bình Định. Trang web này là nơi mình lưu giữ trọn vẹn kỷ niệm thời sinh viên, những dự án đã làm, góc cuộc sống đời thường và hành trình chuẩn bị lên đường nhập ngũ năm 2027 với ước mơ trở thành Sĩ quan / Quân nhân chuyên nghiệp phục vụ Quân đội Nhân dân Việt Nam.',
  location: 'Quy Nhơn, Gia Lai',
  phone: '+84 963 207 146',
  email: 'dinhvan204work@gmail.com',
  github: 'https://github.com/dinhven',
  githubLabel: 'github.com/dinhven',
  statusText: 'Chuẩn bị hành trang lên đường thực hiện Nghĩa vụ Quân sự 2027',
  education: {
    university: 'Trường Đại học Quy Nhơn (Quy Nhon University)',
    period: '09/2022 – 07/2026',
    degree: 'Cử nhân Công nghệ Thông tin – Chuyên ngành Hệ thống Thông tin',
    gpa: '2.80 / 4.0',
  },
  internship: {
    company: 'TMA Solutions Bình Định',
    role: 'Data Engineering Intern',
    summary:
      'Trực tiếp làm việc với SQL Server, Docker, Apache Spark, Kafka và Debezium trong môi trường thực tế; thiết lập môi trường phát triển, xử lý sự cố (troubleshoot) phần mềm/database trên Windows & Linux container và xây dựng các luồng dữ liệu batch/streaming (ETL/ELT, CDC).',
  },
  metrics: [
    { label: 'Đại học Quy Nhơn', value: '2022–2026', unit: 'Cử nhân CNTT (HTTT)' },
    { label: 'Thực tập thực tế', value: 'TMA', unit: 'TMA Solutions Bình Định' },
    { label: 'Mục tiêu lớn', value: '2027', unit: 'Quân đội Nhân dân VN' },
  ],
  coreStack: [
    {
      group: 'Lập trình & Cơ sở dữ liệu',
      items: ['Python', 'SQL', 'C/C++', 'JavaScript', 'SQL Server', 'MySQL', 'MongoDB', 'Neo4j'],
    },
    {
      group: 'IT Systems & Hạ tầng',
      items: [
        'Windows Configuration',
        'Hardware & Software Troubleshooting',
        'Basic Networking',
        'Linux Environment',
        'Docker',
      ],
    },
    {
      group: 'Chuyên ngành Data & Cloud',
      items: ['Apache Spark', 'Kafka', 'Debezium', 'ETL/ELT & CDC', 'Data Warehouse', 'AWS (EC2, S3, RDS, Lambda)'],
    },
    {
      group: 'Công cụ & Kỹ năng mềm',
      items: ['Git / GitHub', 'Jupyter Notebook', 'Làm việc nhóm', 'Giải quyết vấn đề', 'Quản lý thời gian'],
    },
  ],
  lifeSnapshot: {
    studentLife: '4 năm gắn bó với giảng đường ĐH Quy Nhơn, công tác Hội Sinh viên và những cuộc thi lập trình.',
    dailyHabit: 'Rèn luyện thể lực chuẩn bị nhập ngũ • Ôn luyện kiến thức kỹ thuật & hệ thống • Sống kỷ luật, giản dị',
    lifeMotto:
      'Dù ở giảng đường công nghệ hay trong môi trường quân ngũ, sự kỷ luật, trách nhiệm và tinh thần không ngại khó luôn là kim chỉ nam.',
    militaryDream:
      'Năm 2027 lên đường thực hiện Nghĩa vụ Quân sự, phấn đấu trở thành Sĩ quan hoặc Quân nhân chuyên nghiệp phục vụ lâu dài trong Quân đội Nhân dân Việt Nam.',
  },
};

export const STUDENT_MILESTONES: StudentMilestone[] = [
  {
    period: 'Sau tốt nghiệp (2026)',
    title: 'Nhân viên Số hóa tài liệu lưu trữ',
    organization: 'Trung tâm Lưu trữ lịch sử — Sở Nội vụ tỉnh Gia Lai (12 Mai Hắc Đế, Quy Nhơn Nam)',
    description:
      'Làm việc thực tế sau khi tốt nghiệp đại học tại Trung tâm Lưu trữ lịch sử tỉnh Gia Lai, thực hiện số hóa, chuẩn hóa và bảo mật hồ sơ tài liệu hành chính nhà nước trước khi chuẩn bị lên đường nhập ngũ năm 2027.',
    type: 'internship',
    imageFolder: 'di-lam',
    blogUrl: '/blog/le-tot-nghiep-cu-nhan-cntt-2026-va-cong-viec-dau-tien',
  },
  {
    period: '30/07/2026',
    title: 'Lễ Tốt nghiệp Cử nhân Công nghệ Thông tin (Hệ thống Thông tin)',
    organization: 'Trường Đại học Quy Nhơn (GPA: 2.80/4)',
    description:
      'Chính thức nhận bằng Cử nhân ngành Công nghệ Thông tin tại Hội trường lớn Trường Đại học Quy Nhơn ngày 30/07/2026 bên mẹ và gia đình, khép lại trọn vẹn hành trình 4 năm đại học (2022 – 2026).',
    type: 'education',
    imageFolder: 'tot-nghiep-cu-nhan',
    blogUrl: '/blog/le-tot-nghiep-cu-nhan-cntt-2026-va-cong-viec-dau-tien',
  },
  {
    period: '01/2026 – 03/2026',
    title: 'Thực tập Doanh nghiệp — Data Engineering Intern (ID No.: 365)',
    organization: 'TMA Solutions Bình Định (Công viên Sáng tạo TMA — Thung lũng Quy Hòa)',
    description:
      'Làm việc thực tế với SQL Server, Docker, Apache Spark, Kafka và Debezium dưới sự hướng dẫn của Mentor; cấu hình môi trường phát triển trên Windows và Linux container, phát triển batch & streaming pipeline theo mô hình ETL/ELT và CDC.',
    type: 'internship',
    imageFolder: 'tma-internship',
    blogUrl: '/blog/ky-thuc-tap-tai-tma-solutions-va-nhung-du-an-thoi-sinh-vien',
  },
  {
    period: '2022 – 2026',
    title: '4 Năm Sinh viên CNTT K45B: Bí thư Chi đoàn, Lớp Cảm tình Đảng & Trải nghiệm làm thêm',
    organization: 'Khoa Công nghệ Thông tin — Trường Đại học Quy Nhơn',
    description:
      'Được bầu làm Bí thư Chi đoàn CNTT K45B (19/10/2023), tham gia lớp Bồi dưỡng nhận thức về Đảng, dự Đại hội Đoàn Khoa CNTT (2024–2027) và trải nghiệm nhiều công việc làm thêm: bếp Lotteria, shipper ShopeeFood, bảo vệ Quy Nhơn Countdown 2024, chạy sự kiện Đại ngàn chạm biển xanh 2026.',
    type: 'education',
    imageFolder: '4-nam-sinh-vien',
    blogUrl: '/blog/nhin-lai-4-nam-sinh-vien-cntt-dai-hoc-quy-nhon',
  },
  {
    period: '2022 – 2025',
    title: 'Thành viên nòng cốt Đội Thanh niên Xung kích Khoa CNTT (TNXK KCNTT)',
    organization: 'Đoàn Khoa Công nghệ Thông tin — Trường Đại học Quy Nhơn',
    description:
      'Gắn bó xuyên suốt cùng Đội TNXK Khoa CNTT trong các hoạt động hỗ trợ sinh viên, tổ chức giải Thể thao Điện tử, Team Building "Lập trình là chuyện nhỏ!" tại bãi biển Quy Hòa (10/08/2024) và truyền lửa tại lễ Chào Tân Thành Viên (19/09/2025).',
    type: 'activity',
    imageFolder: 'tnxk-kcntt',
    blogUrl: '/blog/tuoi-tre-nhiet-huyet-cung-hoi-sinh-vien-va-doi-tnxk-kcntt',
  },
  {
    period: '2023 – 2028',
    title: 'Ủy viên BCH Hội Sinh viên Trường & Đại biểu Đại hội Hội Sinh viên tỉnh Bình Định lần thứ III',
    organization: 'Hội Sinh viên Việt Nam tỉnh Bình Định & Trường Đại học Quy Nhơn',
    description:
      'Tham gia Ban Chấp hành Hội Sinh viên Trường Đại học Quy Nhơn, vinh dự là đại biểu chính thức dự Đại hội Đại biểu Hội Sinh viên Việt Nam tỉnh Bình Định lần thứ III (nhiệm kỳ 2023 – 2028) và đạt Học bổng Học kỳ 1 năm học 2023–2024.',
    type: 'activity',
    imageFolder: 'hoi-sinh-vien',
    blogUrl: '/blog/tuoi-tre-nhiet-huyet-cung-hoi-sinh-vien-va-doi-tnxk-kcntt',
  },
  {
    period: '2023 – 2024',
    title: 'Giải Khuyến khích Cuộc thi Lập trình IT QNU Challenge (ITQC)',
    organization: 'Khoa Công nghệ Thông tin – ĐH Quy Nhơn (Đồng hành cùng FPT Software)',
    description:
      'Vượt qua vòng sơ loại trực tuyến để tiến vào Vòng Chung kết tập trung (Final Round) và đạt Giải Khuyến khích tại sân chơi lập trình học thuật truyền thống của Khoa Công nghệ Thông tin.',
    type: 'achievement',
    imageFolder: 'itqc-2023',
    blogUrl: '/blog/dau-an-itqc-san-choi-lap-trinh-khoa-cntt-dai-hoc-quy-nhon',
  },
  {
    period: '15/04 – 06/05/2023',
    title: 'Vào Vòng Chung kết Da Nang Code League 2023 (Bảng Code Master — Đội S-Coder)',
    organization: 'FPT Software miền Trung & Trường ĐH Bách khoa – ĐH Đà Nẵng',
    description:
      'Cùng hai đồng đội Trương Quang Tấn và Trần Minh Quyết (đội S-Coder) vượt qua vòng loại gần 1.200 thí sinh để góp mặt trong 45 đội thi đấu trực tiếp tại Vòng Chung kết bảng Code Master tại FPT Complex Đà Nẵng.',
    type: 'achievement',
    imageFolder: 'da-nang-code',
    blogUrl: '/blog/hanh-trinh-chung-ket-da-nang-code-league-2023',
  },
  {
    period: '2019 – 05/2022',
    title: 'Tốt nghiệp THPT & Đạt danh hiệu Học sinh Giỏi Lớp 12 (Năm học 2021 – 2022)',
    organization: 'Trường THPT Ngô Mây — Huyện Phù Cát, Tỉnh Bình Định',
    description:
      'Hoàn thành 3 năm cấp 3 tại Trường THPT Ngô Mây (Phù Cát), nhận Giấy khen Học sinh Giỏi năm học 2021 – 2022 (Số: 097-22/GK ngày 24/05/2022) trước khi trúng tuyển vào ngành Công nghệ Thông tin — Trường Đại học Quy Nhơn.',
    type: 'education',
    imageFolder: 'tot-nghiep-lop-12',
    blogUrl: '/blog/tam-biet-mai-truong-thpt-ngo-may-phu-cat-khep-lai-tuoi-18',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ecommerce-user-behavior-analytics',
    title: 'E-commerce User Behavior Analytics',
    period: '03/2026',
    role: 'Đồ án / Dự án Kỹ thuật Dữ liệu',
    category: 'data',
    categoryLabel: 'Data Engineering',
    githubUrl: 'https://github.com/DinhVen/E-commerce-User-Behavior-Analytics',
    articleUrl: '/blog/ky-thuc-tap-tai-tma-solutions-va-nhung-du-an-thoi-sinh-vien',
    summary:
      'Xây dựng đường ống dữ liệu (Data Pipeline) hoàn chỉnh cả Batch và Streaming cho hệ thống thương mại điện tử, kết hợp thu thập dữ liệu thay đổi (CDC) và thiết kế Data Warehouse.',
    highlights: [
      'Xử lý dữ liệu từ SQL Server bằng PySpark và lưu trữ phân lớp trên Amazon S3 dưới định dạng Parquet.',
      'Triển khai Kafka + Spark Structured Streaming cho luồng sự kiện/giao dịch và Debezium + Kafka cho bài toán CDC.',
      'Thiết kế 3 tầng Bronze, Silver, Gold theo kiến trúc Medallion; xây dựng Data Warehouse áp dụng Dimensional Modeling và SCD Type 2.',
    ],
    architectureFlow: [
      'SQL Server & Events',
      'Debezium CDC & Kafka',
      'PySpark / Spark Streaming',
      'Amazon S3 (Bronze/Silver/Gold)',
      'Data Warehouse (SCD Type 2)',
    ],
    techStack: ['Python', 'PySpark', 'Apache Spark', 'Kafka', 'Debezium', 'SQL Server', 'Amazon S3', 'Parquet', 'Docker'],
    status: 'Hoàn thành (03/2026)',
  },
  {
    id: 'vietnamese-traffic-sign-retrieval',
    title: 'Vietnamese Traffic Sign Retrieval System',
    period: '04/2026',
    role: 'Đồ án Ứng dụng AI & Web',
    category: 'ai',
    categoryLabel: 'AI & Computer Vision',
    githubUrl: 'https://github.com/DinhVen/GTVN',
    articleUrl: '/blog/ky-thuc-tap-tai-tma-solutions-va-nhung-du-an-thoi-sinh-vien',
    summary:
      'Hệ thống tra cứu biển báo giao thông Việt Nam bằng hình ảnh sử dụng mô hình ngôn ngữ-hình ảnh CLIP và thư viện tìm kiếm vector FAISS, kèm giao diện web trực quan.',
    highlights: [
      'Xây dựng hệ thống trích xuất đặc trưng ảnh biển báo bằng CLIP embeddings và tìm kiếm tương đồng tốc độ cao với FAISS vector search.',
      'Phát triển giao diện web bằng React và Vite cho phép người dùng tải ảnh lên và nhận kết quả các biển báo khớp nhất.',
      'Tích hợp thông tin giải thích ý nghĩa biển báo giao thông Việt Nam và hướng dẫn xử lý tình huống khi lái xe.',
    ],
    architectureFlow: [
      'Ảnh biển báo tải lên',
      'React / Vite UI',
      'CLIP Embeddings (Python)',
      'FAISS Vector Search',
      'Kết quả & Hướng dẫn lái xe',
    ],
    techStack: ['Python', 'CLIP', 'FAISS', 'React', 'Vite', 'JavaScript'],
    status: 'Hoàn thành (04/2026)',
  },
];

export const TECH_TOOLS: TechToolItem[] = [
  {
    id: 'apache-spark-pyspark',
    name: 'Apache Spark & PySpark',
    category: 'data',
    categoryLabel: 'Data Engineering',
    purpose: 'Xử lý dữ liệu phân tán quy mô lớn (Batch & Structured Streaming), làm sạch và biến đổi dữ liệu giữa các tầng Bronze, Silver, Gold.',
    usedIn: 'Thực tập TMA Solutions Lab 6 & Dự án E-commerce Analytics',
    relatedUrl: 'https://github.com/DinhVen/E-commerce-User-Behavior-Analytics',
    tags: ['PySpark', 'Spark Streaming', 'ETL/ELT', 'Medallion'],
  },
  {
    id: 'kafka-debezium-cdc',
    name: 'Apache Kafka & Debezium CDC',
    category: 'data',
    categoryLabel: 'Streaming & CDC',
    purpose: 'Thu thập dữ liệu thay đổi theo thời gian thực (Change Data Capture) từ cơ sở dữ liệu giao dịch và truyền tải qua hệ thống hàng đợi sự kiện.',
    usedIn: 'Dự án E-commerce User Behavior Analytics & Thực tập TMA',
    relatedUrl: 'https://github.com/DinhVen/E-commerce-User-Behavior-Analytics',
    tags: ['Kafka', 'Debezium', 'Real-time CDC', 'Event Streaming'],
  },
  {
    id: 'clip-faiss-vector',
    name: 'OpenAI CLIP & FAISS Vector Search',
    category: 'ai',
    categoryLabel: 'AI & Retrieval Tool',
    purpose: 'Trích xuất vector đặc trưng đa phương thức (ảnh – văn bản) và truy vấn tương đồng tốc độ cao trên tập dữ liệu biển báo giao thông Việt Nam.',
    usedIn: 'Dự án Vietnamese Traffic Sign Retrieval System (GTVN)',
    relatedUrl: 'https://github.com/DinhVen/GTVN',
    tags: ['CLIP', 'FAISS', 'Vector Search', 'Computer Vision'],
  },
  {
    id: 'sql-nosql-graph-db',
    name: 'SQL Server, MySQL, MongoDB & Neo4j',
    category: 'db',
    categoryLabel: 'Database & Warehouse',
    purpose: 'Thiết kế cơ sở dữ liệu quan hệ, NoSQL và đồ thị; xây dựng Data Warehouse theo mô hình Dimensional Modeling (Star Schema & SCD Type 2).',
    usedIn: 'Chuyên ngành Hệ thống Thông tin (ĐH Quy Nhơn) & TMA Lab 6',
    relatedUrl: '/blog/ky-thuc-tap-tai-tma-solutions-va-nhung-du-an-thoi-sinh-vien',
    tags: ['SQL Server', 'MySQL', 'MongoDB', 'Neo4j', 'SCD Type 2'],
  },
  {
    id: 'docker-linux-env',
    name: 'Docker & Linux Containerization',
    category: 'infra',
    categoryLabel: 'DevOps & Hạ tầng',
    purpose: 'Đóng gói và triển khai cụm dịch vụ Kafka, Spark, Debezium, SQL Server đồng nhất trên môi trường Linux/Windows container.',
    usedIn: 'Thực tập TMA Solutions Bình Định & Các đồ án chuyên ngành',
    relatedUrl: 'https://github.com/DinhVen/E-commerce-User-Behavior-Analytics',
    tags: ['Docker', 'Docker Compose', 'Linux', 'Troubleshooting'],
  },
  {
    id: 'aws-cloud-storage',
    name: 'AWS (EC2, S3, RDS, Lambda) & Parquet',
    category: 'infra',
    categoryLabel: 'Cloud & Data Lake',
    purpose: 'Lưu trữ dữ liệu phân lớp trên Amazon S3 theo định dạng cột Parquet tối ưu hiệu năng truy vấn và vận hành hạ tầng đám mây.',
    usedIn: 'Dự án E-commerce User Behavior Analytics',
    relatedUrl: 'https://github.com/DinhVen/E-commerce-User-Behavior-Analytics',
    tags: ['Amazon S3', 'AWS EC2', 'AWS RDS', 'Parquet'],
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    horizon: '2022 - 2026',
    horizonLabel: 'Nền tảng Đại học & Thực tập',
    title: 'Hoàn thành chặng đường Sinh viên CNTT tại ĐH Quy Nhơn & Thực tập tại TMA Solutions',
    category: 'Học tập & Rèn luyện',
    description:
      'Tốt nghiệp Cử nhân CNTT (Hệ thống Thông tin), tích lũy kinh nghiệm thực tế tại TMA Solutions Bình Định, tham gia BCH Hội Sinh viên và hoàn thành các đồ án kỹ thuật.',
    badgeType: 'de',
  },
  {
    horizon: '2027',
    horizonLabel: 'Cột mốc lớn sắp tới',
    title: 'Lên đường thực hiện Nghĩa vụ Quân sự năm 2027',
    category: 'Nghĩa vụ & Trách nhiệm',
    description:
      'Sẵn sàng sức khỏe, tâm thế và tinh thần kỷ luật thép để bước vào môi trường quân ngũ, hoàn thành tốt mọi nhiệm vụ của người chiến sĩ.',
    badgeType: 'life',
  },
  {
    horizon: 'DÀI HẠN',
    horizonLabel: 'Ước mơ & Lý tưởng phụng sự',
    title: 'Trở thành Sĩ quan hoặc Quân nhân chuyên nghiệp trong Quân đội Nhân dân Việt Nam',
    category: 'Ước mơ Quân ngũ',
    description:
      'Thực hiện ước mơ gắn bó lâu dài với màu xanh áo lính, đem sức trẻ và kiến thức Công nghệ Thông tin đã được đào tạo để phục vụ công cuộc hiện đại hóa Quân đội Nhân dân Việt Nam.',
    badgeType: 'future',
  },
];
