import { TechBadge } from "./TechBadge"

export const TechStacks = () => {
    return (
        <section className="relative">
            <article>
                <h4 className="font-bold mb-6">
                    Front-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>HTML5</TechBadge>
                    <TechBadge>CSS</TechBadge>
                    <TechBadge>SASS</TechBadge>
                    <TechBadge>BEM</TechBadge>
                    <TechBadge>React</TechBadge>
                    <TechBadge>NextJS</TechBadge>
                    <TechBadge>React Native</TechBadge>
                    <TechBadge>Typescript</TechBadge>
                    <TechBadge>Javascript</TechBadge>
                    <TechBadge>TailwindCSS</TechBadge>
                    <TechBadge>UI Libraries</TechBadge>
                    <TechBadge>Framer Motion</TechBadge>
                    <TechBadge>Django</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Back-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>Python</TechBadge>
                    <TechBadge>NodeJS</TechBadge>
                    <TechBadge>Express</TechBadge>
                    <TechBadge>OpenAI</TechBadge>
                    <TechBadge>Gemini</TechBadge>
                    <TechBadge>Hono</TechBadge>
                    <TechBadge>Axios</TechBadge>
                    <TechBadge>Flask</TechBadge>
                    <TechBadge>PHP</TechBadge>
                    <TechBadge>Zustand</TechBadge>
                    <TechBadge>REST API</TechBadge>
                    <TechBadge>GraphQL</TechBadge>
                    <TechBadge>Express</TechBadge>
                    <TechBadge>Web Socket</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Databases
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>Postgres</TechBadge>
                    <TechBadge>SQL</TechBadge>
                    <TechBadge>MongoDB</TechBadge>
                    <TechBadge>Supabase</TechBadge>
                    <TechBadge>Convex</TechBadge>
                    <TechBadge>Appwrite</TechBadge>
                    <TechBadge>AWS S3 Bucket</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Other Tools
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>Jira</TechBadge>
                    <TechBadge>Git</TechBadge>
                    <TechBadge>Github</TechBadge>
                    <TechBadge>Github Actions</TechBadge>
                    <TechBadge>Clerk</TechBadge>
                    <TechBadge>OAuth</TechBadge>
                    <TechBadge>JWT</TechBadge>
                    <TechBadge>Heroku</TechBadge>
                    <TechBadge>Netlify</TechBadge>
                    <TechBadge>Docker</TechBadge>
                    <TechBadge>AWS Amplify</TechBadge>
                </aside>
            </article>
        </section>
    )
}