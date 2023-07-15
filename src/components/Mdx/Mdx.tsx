import '@/styles/mdx.css'
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    h1: ({ className, children, ...props }) => (
        <h1 className={`text-4xl font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    h2: ({ className, children, ...props }) => (
        <h1 className={`text-3xl font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    h3: ({ className, children, ...props }) => (
        <h1 className={`text-2xl font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    h4: ({ className, children, ...props }) => (
        <h1 className={`text-xl font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    h5: ({ className, children, ...props }) => (
        <h1 className={`text-lg font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    h6: ({ className, children, ...props }) => (
        <h1 className={`text-base font-bold ${className}`} {...props} >
            {children}
        </h1>
    ),

    a: ({ className, children, ...props }) => (
        <a className={`font-medium text-link underline underline-offset-4  ${className}`} {...props} >
            {children}
        </a>
    ),

    p: ({ className, children, ...props }) => (
        <p className={`text-xl mb-4  leading-7 text-slate-300 ${className}`} {...props} >
            {children}
        </p>
    ),

    blockquote: ({ className, children, ...props }) => (
        <blockquote className={`mt-6 mb-4 border-l-2 pl-6 font-normal italic text-gray-200 ${className}`} {...props} >
            {children}
        </blockquote>
    ),


    pre: ({ className, children, ...props }) => (
        <pre className={`text-md mb-4 mt-6 overflow-x-auto rounded-lg py-4 bg-gray-600 ${className}`} {...props} >
            {children}
        </pre>
    ),

    code: ({ className, children, ...props }) => (
        <code className={`text-md relative rounded bg-gray-700 px-[0.4rem] py-[0.1rem]
        font-mono leading-tight text-gray-50 ${className}`}
              {...props} >
            {children}
        </code>
    ),
};


export const Mdx = ({
    code = ''
}) => {

    const Component = useMDXComponent(code)
    return (
        <div>
            <Component components={components} />
        </div>
    )
}


