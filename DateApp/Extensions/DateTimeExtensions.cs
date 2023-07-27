namespace DateApp.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateOnly dateOnly)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);
            var ages = today.Year - dateOnly.Year;
            if (dateOnly > today.AddYears(-ages)) ages--;
            return ages;
        }
    }
}
