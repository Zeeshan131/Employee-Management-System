﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210909124018_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Domain.Project", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Developer1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer3")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer4")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer5")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer6")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer7")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DomainArchitecture")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductOwner")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScrumMaster")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Solution")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TechPod")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TechnicalLead")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tower")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UxDesigner")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });
#pragma warning restore 612, 618
        }
    }
}
