using DateApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace DateApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<AppUser> Users { get; set; }


    }
}
