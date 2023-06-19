declare global
{
    namespace NodeJS
    {
        interface ProcessEnv
        {
            UNSPLASH_ACCESS_KEY: string;
            SECRET_KEY: string;
        }
    }
}
export { };