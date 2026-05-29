import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { TestimonialCard } from './ui/TestimonialCard'

const testimonials = [
  {
    title: 'להחזיר את הקול שלי לעצמי',
    body: 'גל, רציתי להגיד לך תודה. הגעתי לתהליך בתחושה שהבעיה היא זוגיות, אחר כך עבודה, ואז שוב זוגיות. אבל לאט לאט הבנתי שזה לא באמת הנושא — זה אותו דפוס שחוזר לי בכל מקום.\n\nפתאום ראיתי כמה אני בודקת כל בחירה דרך השאלה מה יחשבו, ואם זה יקבל אישור מבחוץ. השאלה שלך — מי אני אהיה בלי הקול הזה — לא עזבה אותי.\n\nזה גרם לי להבין כמה זה פוגע לי בביטחון, וכמה אני רוצה להתחיל לבחור מתוך הקול שלי. תודה שאתה עוזר לי להחזיר אותו לעצמי.',
    meta: 'מ׳ | תהליך אימון אישי',
    tag: 'אימון אישי 1:1',
  },
  {
    title: 'מצאתי את הקול שלי',
    body: 'גל, רציתי לשתף אותך במשהו קטן שקרה היום. הייתה לי שיחה שפעם הייתה גורמת לי ישר להתכווץ, להסכים, ולצאת אחר כך מתוסכל.\n\nהפעם עצרתי רגע. נשמתי. שאלתי את עצמי מה באמת חשוב לי כאן, ואמרתי את הדברים שלי בשקט, בלי להתנצל ובלי להילחם.\n\nזה אולי נראה מבחוץ כמו רגע קטן, אבל בשבילי זה היה ממש גדול. הרגשתי שאני לא מוותר על עצמי.',
    meta: 'א׳ | תהליך אימון אישי',
    tag: 'אימון אישי 1:1',
  },
  {
    title: 'הפסקתי לחכות להיות מוכן',
    body: 'בוקר טוב גל. רציתי לעדכן אותך שעשיתי את הצעד שדיברנו עליו כבר כמה שבועות.\n\nלפני זה הראש שוב התחיל עם \'זה לא הזמן\', \'אתה לא מוכן\', \'מה יחשבו\'. אבל הפעם הצלחתי לראות שזה פחד שמדבר, לא אמת.\n\nלחצתי שלח, והרגשתי שמשהו בי השתחרר. תודה שאתה עוזר לי לזוז בלי לדחוף אותי בכוח.',
    meta: 'ר׳ | תהליך אימון אישי',
    tag: 'אימון אישי 1:1',
  },
  {
    title: 'לפגוש את עצמי ממקום אחר',
    body: 'סדנת הריברסינג בהנחיית גל יצרה עבורי חוויה משמעותית, בתוך סביבה בטוחה ומאפשרת. היה בה מנעד רחב של רגשות ותובנות, שהתחברו לתהליך אחד שלם ומדויק. זו חוויה מומלצת למי שמוכן להתמסר, לשחרר שליטה, ולפגוש את עצמו ממקום אחר.',
    meta: 'ע׳ | משתתפת בסדנת נשימה / ריברסינג',
    tag: 'סדנת נשימה',
  },
]

export const WordsFromTheWay = () => {
  return (
    <section id="testimonials" className="bg-white px-4 pt-2 pb-8 md:py-16">
      <MobileSectionDivider />
      <div className="mt-6 md:mt-0 max-w-6xl mx-auto">

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-4xl font-bold text-text-primary leading-tight">
            מילים מהדרך
          </h2>
          <p className="mt-4 text-text-secondary text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed">
            לפעמים השינוי לא נראה כמו דרמה גדולה. לפעמים הוא מופיע ברגע קטן: בשיחה שבה הגבנו אחרת, בהחלטה שדחינו הרבה זמן, או ביכולת לפגוש את עצמנו עם קצת פחות ביקורת ויותר בחירה.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              title={t.title}
              body={t.body}
              meta={t.meta}
              tag={t.tag}
            />
          ))}
        </div>

        <p
          className="mt-6 text-center text-xs leading-relaxed text-text-secondary/60 max-w-md mx-auto"
          dir="rtl"
        >
          ההמלצות מוצגות באישור המשתתפים, ובמידת הצורך ללא שם מלא.
        </p>

        <div className="mt-8 text-center">
          <BackToSectionNav />
        </div>

      </div>
    </section>
  )
}
