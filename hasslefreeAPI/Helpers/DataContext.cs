﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hasslefreeAPI.Entities;
using Microsoft.EntityFrameworkCore;


namespace hasslefreeAPI.Helpers
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
