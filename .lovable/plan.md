

# חיבור טופס הלידים ל-Google Sheets + התראות

## מה ישתנה

עדכון קובץ אחד: `src/components/LeadFormSection.tsx`

## השינויים

1. **שליחת נתונים ל-Google Apps Script** — בלחיצה על "בואו לעבוד איתנו", הטופס ישלח POST לכתובת ה-Apps Script שפרסמת
2. **מצב טעינה** — הכפתור יציג אנימציית טעינה בזמן השליחה
3. **טיפול בשגיאות** — אם השליחה נכשלת, תוצג הודעת שגיאה למשתמש
4. **הודעת הצלחה משופרת** — כפתור וואטסאפ בהודעת ההצלחה ישלח הודעה מוכנה לבעל הדף (+12164079325) עם שם וטלפון של הליד

## פרטים טכניים

- שליחה ישירה מהדפדפן ב-`fetch` עם `mode: 'no-cors'` (Google Apps Script דורש זאת מדומיינים חיצוניים)
- הכתובת: `https://script.google.com/macros/s/AKfycbzSljYYRPcB1mjgzPmUuJuo3rsc9s_vulep20kmnDVDP2hMQxHfE37fX9BF_NjBSJu4/exec`
- הוספת state חדש: `loading` (boolean) ו-`error` (string)
- קישור וואטסאפ דינמי עם `encodeURIComponent` לטקסט הודעה מוכן

