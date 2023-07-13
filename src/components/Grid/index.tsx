type GridProps = {
    children: React.ReactNode;
    cols?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    gap?: number;
}
export const Grid = ({
        children,
        cols = 1,
        sm,
        md,
        lg,
        xl,
        xxl,
        gap = 8
    }: GridProps) => {

    const columns = cols ? `grid-cols-${cols}` : '';
    const small = sm ? `sm:grid-cols-${sm}` : '';
    const medium = md ? `md:grid-cols-${md}` : '';
    const large = lg ? `lg:grid-cols-${lg}` : '';
    const xlarge = xl ? `xl:grid-cols-${xl}` : '';
    const xxlarge = xxl ? `2xl:grid-cols-${xxl}` : '';
    const gapSize = gap ? `gap-${gap}` : '';

    const responsive = `${columns} ${small} ${medium} ${large} ${xlarge} ${xxlarge} ${gapSize}`;
    return (
        <>
            <div className={`grid ${responsive} w-full`}>
                {children}
            </div>
        </>

    )
}