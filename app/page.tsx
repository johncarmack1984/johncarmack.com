import { OL } from "@/components/ui/ol";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H1 } from "@/components/ui/typography/H1";
import { H3 } from "@/components/ui/typography/H3";
import { P } from "@/components/ui/typography/P";

export default function Home() {
  const sections = [
    {
      title: "About Me",
      content:
        "Provide a brief introduction and overview of your professional background, skills, and interests.",
    },
    {
      title: "Projects",
      content:
        "Showcase your notable projects, describing the technologies used, your role, and the impact of each project.",
    },
    {
      title: "Portfolio",
      content: `Include a curated selection of your best work, providing links to live demos or GitHub repositories.`,
    },
    {
      title: "Blog or Articles",
      content: `Share your insights, experiences, and expertise through blog posts or articles related to software development or technology.`,
    },
    {
      title: "Resume/CV",
      content: `Offer a downloadable version of your resume for visitors who may want to learn more about your qualifications.`,
    },
    {
      title: "Contact Information",
      content: `Make it easy for potential employers or collaborators to reach out to you by providing your email address or a contact form.`,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-start justify-start basis-1/3">
      <H1>John Carmack</H1>
      <Separator />
      <H3>Software Engineer</H3>
      <P>
        With a strong background in full-stack software engineering and a
        specialization in Frontend Architecture, I offer a wealth of experience
        in designing, developing, and maintaining large-scale marketing
        platforms. In my work with Tahzoo as Development Team Lead, I
        successfully implemented complex projects for two S&P 500 clients using
        Next.js, AWS, and ContentStack. My technical expertise extends to
        React.js, Next.js, AWS, Azure, and relational databases.
      </P>
      <P>
        My skill set includes designing and developing integrations (ETL
        pipelines) to meet varied user needs in terms of functionality,
        performance, scalability, and reliability. With a strong understanding
        of object-oriented programming and functional programming concepts, I am
        proficient in writing high-quality, scalable, testable, maintainable,
        and reliable code. I am also experienced in setting up and maintaining
        CI/CD pipelines for smooth integration and deployment of code changes
        using AWS and GitLab. Leadership and project management are integral to
        my role, where I lead a team of developers, conducting code reviews,
        peer inspections, and technical design/specifications. I place a high
        emphasis on cross-functional skill development and best practices to
        ensure high standards are met across the department. Furthermore, I am
        proficient in data analysis and data quality tests, capable of creating
        audits for ETLs, and have experience in designing and implementing
        solutions that process large volumes of data. My ability to work
        collaboratively and drive results, even under challenging circumstances,
        has earned me accolades and trust from clients and team members alike.
        With a Bachelor&apos;s degree in Computer Science, over six years of
        full-stack software engineering experience, and a proven track record in
        managing and delivering large-scale projects, I am prepared to take on
        the challenge of the Senior Software Developer role at Welltower and
        contribute to your mission of transforming health care infrastructure.
      </P>
      <Tabs defaultValue="about-me">
        <TabsList>
          <TabsTrigger value="about-me">About Me</TabsTrigger>
        </TabsList>
        <TabsContent value="about-me">
          About Me: Provide a brief introduction and overview of your
          professional background, skills, and interests.
        </TabsContent>

        <TabsContent value="">
          Projects: Showcase your notable projects, describing the technologies
          used, your role, and the impact of each project.
        </TabsContent>
        <TabsContent value="">
          Portfolio: Include a curated selection of your best work, providing
          links to live demos or GitHub repositories.
        </TabsContent>
        <TabsContent value="">
          Blog or Articles: Share your insights, experiences, and expertise
          through blog posts or articles related to software development or
          technology.
        </TabsContent>
        <TabsContent value="">
          Resume/CV: Offer a downloadable version of your resume for visitors
          who may want to learn more about your qualifications.
        </TabsContent>
        <TabsContent value="">
          Contact Information: Make it easy for potential employers or
          collaborators to reach out to you by providing your email address or a
          contact form.
        </TabsContent>
      </Tabs>
    </main>
  );
}
